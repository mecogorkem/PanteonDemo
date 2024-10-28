using TMPro;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UI;

public class WallPainter : MonoBehaviour
{
    [Header("UI Elements")]
    [SerializeField] private Slider brushSizeSlider;
    [SerializeField] private TextMeshPro paintedPercentageText;
    [SerializeField] private Button yellowButton;
    [SerializeField] private Button redButton;
    [SerializeField] private Button blueButton;
    [SerializeField] private GameObject canvas;

    [Header("Painting Settings")]
    [SerializeField] private Material mainMaterial;
    [SerializeField] private Texture _sprite;
    [SerializeField] private MeshRenderer _meshRenderer;
    [SerializeField] private Transform wallTransform;

    private Color currentColor = Color.yellow;
    private float brushSize = 0.1f;
    private float paintedPercentage = 0f;
    private float totalWallPixels; // Total pixels of the texture to paint

    private Vector2? lastPaintedPosition = null;
    private float paintThreshold = 0.05f; // Distance threshold for interpolation

    int textureID = Shader.PropertyToID("_MainTex");
    int colorID = Shader.PropertyToID("_PainterColor");
    int positionID = Shader.PropertyToID("_PainterPosition");
    int radiusID = Shader.PropertyToID("_Radius");
    int hardnessID = Shader.PropertyToID("_Hardness");
    int strengthID = Shader.PropertyToID("_Strength");

    public Shader texturePaint;
    private CommandBuffer command;
    private RenderTexture supportTexture;
    private RenderTexture supportTexture2;
    private Texture2D readTexture; // Texture used for pixel sampling

    private Material paintMaterial;

    private void Awake()
    {
        paintMaterial = new Material(texturePaint);
        command = new CommandBuffer { name = "CommandBuffer - " + gameObject.name };
        supportTexture = new RenderTexture(900, 900, 0) { filterMode = FilterMode.Bilinear };
        supportTexture2 = new RenderTexture(900, 900, 0) { filterMode = FilterMode.Bilinear };
        mainMaterial = new Material(mainMaterial) { mainTexture = _sprite };
        _meshRenderer.material = mainMaterial;

        // Initialize readTexture and calculate total wall pixels
        readTexture = new Texture2D(supportTexture.width, supportTexture.height, TextureFormat.RGBA32, false);
        totalWallPixels = supportTexture.width * supportTexture.height;
    }

    private void Start()
    {
        yellowButton.onClick.AddListener(() => SetBrushColor(Color.yellow));
        redButton.onClick.AddListener(() => SetBrushColor(Color.red));
        blueButton.onClick.AddListener(() => SetBrushColor(Color.cyan));
        brushSizeSlider.onValueChanged.AddListener(SetBrushSize);
        GameManager.Instance.onGameComplete += CompleteGame;
    }

    private void CompleteGame()
    {
        canvas.SetActive(false);
    }

    private void Update()
    {
        if (GameManager.Instance.isGameCompleted)
        {
            return;
        }
        if (Input.GetMouseButton(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit) && hit.transform == wallTransform)
            {
                Vector2 currentPos = new Vector2(hit.textureCoord.x, hit.textureCoord.y);

                if (lastPaintedPosition.HasValue)
                {
                    float distance = Vector2.Distance(lastPaintedPosition.Value, currentPos);
                    if (distance > paintThreshold)
                    {
                        PaintBetweenPositions(lastPaintedPosition.Value, currentPos, distance);
                    }
                }

                paint(currentPos, brushSize, 0, 1, currentColor);
                lastPaintedPosition = currentPos;
            }
        }
        else
        {
            lastPaintedPosition = null;
        }
    }

    private void SetBrushColor(Color color)
    {
        currentColor = color;
    }

    private void SetBrushSize(float size)
    {
        brushSize = size;
    }

    private void PaintBetweenPositions(Vector2 start, Vector2 end, float distance)
    {
        int steps = Mathf.CeilToInt(distance / paintThreshold);
        for (int i = 1; i <= steps; i++)
        {
            Vector2 interpolatedPos = Vector2.Lerp(start, end, (float)i / steps);
            paint(interpolatedPos, brushSize, 0, 1, currentColor);
        }
    }

    public void paint(Vector2 pos, float radius = 0.13f, float hardness = 0, float strength = 1, Color? color = null)
    {
        paintMaterial.SetVector(positionID, pos);
        paintMaterial.SetFloat(hardnessID, hardness);
        paintMaterial.SetFloat(strengthID, strength);
        paintMaterial.SetFloat(radiusID, radius);
        paintMaterial.SetColor(colorID, color ?? currentColor);

        command.Blit(mainMaterial.mainTexture, supportTexture, paintMaterial);
        command.Blit(supportTexture, supportTexture2);
        mainMaterial.mainTexture = supportTexture2;

        Graphics.ExecuteCommandBuffer(command);
        command.Clear();

        // Update painted area based on texture sampling
        CalculatePaintedPercentage();
    }

    private void CalculatePaintedPercentage()
    {
        // Copy RenderTexture to readTexture for pixel analysis
        RenderTexture.active = supportTexture2;
        readTexture.ReadPixels(new Rect(0, 0, supportTexture2.width, supportTexture2.height), 0, 0);
        readTexture.Apply();
        RenderTexture.active = null;

        int paintedPixels = 0;

        // Analyze each pixel to determine if it has been painted
        Color32[] pixels = readTexture.GetPixels32(); 
        foreach (Color32 pixel in pixels)
        {
            if (pixel.a > 200) // Check if pixel has any opacity (painted)
            {
                paintedPixels++;
            }
        }

        paintedPercentage = Mathf.Round((paintedPixels / totalWallPixels) * 100f);
        if (paintedPercentage == 100)
        {
            GameManager.Instance.CompleteGame();
        }
        UpdatePaintedPercentageText();
    }

    private void UpdatePaintedPercentageText()
    {
        paintedPercentageText.text = $"{paintedPercentage:0}%";
    }
}
