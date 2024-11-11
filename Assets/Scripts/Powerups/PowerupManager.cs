using UnityEngine;
using System.Collections;
using DG.Tweening;
using TMPro;

public class PowerupManager : MonoBehaviour
{
    public static PowerupManager Instance;

    // References to your power-up prefabs
    [SerializeField] private GameObject bananaPrefab;
    // Add more prefabs as needed
    [SerializeField] private TextMeshProUGUI placePowerUpText;
    [SerializeField] private RectTransform cursor;
    [SerializeField] private GameObject powerUpUI;
    private bool isClicked = false;


    public void Clicked()
    {
        isClicked = true;
    }
    
    private void Awake()
    {
        Instance = this;
        placePowerUpText.transform.DOScale(Vector3.one * 1.5f, 0.5f)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine)
            .SetUpdate(true);
        cursor.transform.DOScale(Vector3.one * 1.5f, 0.5f)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine)
            .SetUpdate(true);
        
    }

    public void CollectPowerUp(PowerUpType powerUpType)
    {
        StartCoroutine(HandlePowerUpPlacement(powerUpType));
    }

    private IEnumerator HandlePowerUpPlacement(PowerUpType powerUpType)
    {
        // Slow down and pause the game
        float slowdownDuration = 0.3f; // Duration over which the game slows down
        float elapsed = 0f;
        
        while (elapsed < slowdownDuration)
        {
            elapsed += Time.unscaledDeltaTime;
            Time.timeScale = Mathf.Lerp(1, 0.4f, elapsed / slowdownDuration);
            yield return new WaitForSecondsRealtime(0.02f);
        }

        powerUpUI.SetActive(true);
        Time.timeScale = 0f;
        bool powerUpPlaced = false;
        var firstPlayerPos = RankManager.Instance.GetFirstRacerPosition()+Vector3.forward*2f;
        Vector3 screenPos = Camera.main.WorldToScreenPoint(firstPlayerPos);
        cursor.position = screenPos; 
        placePowerUpText.text = GetTextForPowerUp(powerUpType);
        while (!powerUpPlaced)
        {
            if (Input.GetMouseButtonDown(0)) // Check for mouse click
            {
                // Get the mouse position in screen coordinates
                Vector3 mousePosition = Input.mousePosition;
        
                // Convert mouse position to a ray in world space
                Ray ray = Camera.main.ScreenPointToRay(mousePosition);
                RaycastHit hit;
        
                // Perform the raycast and check if it hits an object in the platform layer
                if (Physics.Raycast(ray, out hit, Mathf.Infinity))
                {
                    // Spawn the power-up at the hit point
                    GameObject powerUpPrefab = GetPowerUpPrefab(powerUpType);
                    if (powerUpPrefab != null)
                    {
                        Time.timeScale = 1f;
                        var prefabPos = hit.point;
                        prefabPos.y = 0;
                        Instantiate(powerUpPrefab,prefabPos, Quaternion.identity);
                        powerUpPlaced = true;
                    }
                    else
                    {
                        Debug.LogError("Power-up prefab not found for type: " + powerUpType);
                    }
                }
            }

            yield return null; // Wait for the next frame
        }
  
        // Resume the game
        powerUpUI.SetActive(false);
        // Optionally, revert any UI or cursor changes
    }

    private string GetTextForPowerUp(PowerUpType powerUpType)
    {
        switch (powerUpType)
        {
            case PowerUpType.Bomb:
                return "Place the bomb!";
            // Add other cases as needed
            default:
                return "Place the power-up on the track!";
        }
    }

    private GameObject GetPowerUpPrefab(PowerUpType powerUpType)
    {
        switch (powerUpType)
        {
            case PowerUpType.Bomb:
                return bananaPrefab;
            // Add other cases as needed
            default:
                return null;
        }
    }
}
