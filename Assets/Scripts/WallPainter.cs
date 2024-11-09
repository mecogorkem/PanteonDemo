using System;
using TMPro;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UI;
using DG.Tweening; // Make sure you have DoTween imported

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
    [SerializeField] private MeshRenderer _meshRenderer;
    [SerializeField] private Transform wallTransform;
    
    [Header("Sound")]
    [SerializeField] private AudioSource _audioSource;
    [SerializeField] private float maxVolume = 0.2f;
    [SerializeField] private float volumeFadeSpeed = 0.5f;
    private float currentVolume = 0f;

    private Color currentColor = Color.yellow;
    private float brushSize = 0.1f;
    private float paintedPercentage = 0f;
    private float totalWallPixels;

    private Vector2? lastPaintedPosition = null;
    private float paintThreshold = 0.05f;

    int textureID = Shader.PropertyToID("_MainTex");
    int colorID = Shader.PropertyToID("_PainterColor");
    int positionID = Shader.PropertyToID("_PainterPosition");
    int radiusID = Shader.PropertyToID("_Radius");
    int hardnessID = Shader.PropertyToID("_Hardness");
    int strengthID = Shader.PropertyToID("_Strength");

    public Shader texturePaint;
    private RenderTexture supportTexture;
    private RenderTexture supportTexture2;
    private Texture2D readTexture;

    private Material paintMaterial;

    private void Awake()
    {
        paintMaterial = new Material(texturePaint);
        supportTexture = new RenderTexture(103, 70, 0) { filterMode = FilterMode.Bilinear };
        supportTexture2 = new RenderTexture(103, 70, 0) { filterMode = FilterMode.Bilinear };
        mainMaterial = new Material(mainMaterial) { mainTexture = supportTexture2 };
        _meshRenderer.material = mainMaterial;

        readTexture = new Texture2D(supportTexture.width, supportTexture.height, TextureFormat.RGBA32, false);
        totalWallPixels = supportTexture.width * supportTexture.height;
    }

    private void Start()
    {
        yellowButton.onClick.AddListener(() => SetBrushColor(Color.yellow, yellowButton));
        redButton.onClick.AddListener(() => SetBrushColor(Color.red, redButton));
        blueButton.onClick.AddListener(() => SetBrushColor(Color.cyan, blueButton));
        brushSizeSlider.onValueChanged.AddListener(SetBrushSize);
        GameManager.Instance.onGameComplete += CompleteGame;
        SetBrushColor(Color.yellow, yellowButton);
    }

    private void CompleteGame()
    {
        canvas.SetActive(false);
        currentVolume = 0f;
        _audioSource.volume = currentVolume;
    }

    private void Update()
    {
        if (GameManager.Instance.isGameCompleted) return;
        
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
            currentVolume = Mathf.MoveTowards(currentVolume, maxVolume, volumeFadeSpeed * Time.deltaTime);
        }
        else
        {
            currentVolume = Mathf.MoveTowards(currentVolume, 0f, volumeFadeSpeed * Time.deltaTime);
            lastPaintedPosition = null;
        }
        _audioSource.volume = currentVolume;
    }

    private void FixedUpdate()
    {
        if(GameManager.Instance.isGameCompleted) return;
        CalculatePaintedPercentage();
    }

    private void SetBrushColor(Color color, Button selectedButton)
    {
        currentColor = color;

        // Scale selected button up and reset others
        yellowButton.transform.DOScale(selectedButton == yellowButton ? 1.2f : 1f, 0.2f);
        redButton.transform.DOScale(selectedButton == redButton ? 1.2f : 1f, 0.2f);
        blueButton.transform.DOScale(selectedButton == blueButton ? 1.2f : 1f, 0.2f);
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

        Graphics.Blit(supportTexture2, supportTexture, paintMaterial);
        Graphics.Blit(supportTexture, supportTexture2);

        mainMaterial.mainTexture = supportTexture2;

    }


    private void CalculatePaintedPercentage()
    {
        RenderTexture.active = supportTexture2;
        readTexture.ReadPixels(new Rect(0, 0, supportTexture2.width, supportTexture2.height), 0, 0);
        readTexture.Apply();
        RenderTexture.active = null;

        int paintedPixels = 0;
        Color32[] pixels = readTexture.GetPixels32();
       
        foreach(Color32 pixel in pixels)
        {
            if (pixel.a > 200)
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
