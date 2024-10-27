using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using TMPro;

public class CoinManager : MonoBehaviour
{
    public static CoinManager Instance { get; private set; }

    [SerializeField] private TextMeshProUGUI coinCounterText;     // Reference to the UI text element for coin count
    [SerializeField] private GameObject flyingCoinPrefab; // Prefab for the flying coin animation
    [SerializeField] private Transform uiTarget;       // UI target position for the flying coins

    private int totalCoinsCollected = 0;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        
        Instance = this;
        DontDestroyOnLoad(gameObject); // Persist across scenes
    }

    private void Start()
    {
        UpdateCoinUI();
    }

    public void CollectCoin(Vector3 coinWorldPosition)
    {
        AddCoins(1);

        var coinCanvasPosition = Camera.main.WorldToScreenPoint(coinWorldPosition);
        // Spawn and animate 5 flying coins towards the UI
        for (int i = 0; i < 5; i++)
        {
            GameObject flyingCoin = Instantiate(flyingCoinPrefab, coinCanvasPosition, Quaternion.identity,this.transform.parent);

            // Animate the flying coin to move towards the UI target
            flyingCoin.transform.DOMove(uiTarget.position, 0.8f+i*0.1f)
                .SetEase(Ease.InOutQuad)
                .OnComplete(() =>
                {
                    AddCoins(1);
                    Destroy(flyingCoin);
                }); // Destroy the coin after reaching the target
        }
    }

    private void AddCoins(int amount)
    {
        totalCoinsCollected += amount;
        UpdateCoinUI();
    }

    private void UpdateCoinUI()
    {
        coinCounterText.text = totalCoinsCollected.ToString();
    }
}