using DG.Tweening;
using TMPro;
using UnityEngine;

public class CoinManager : MonoBehaviour
{
	[SerializeField]
	private TextMeshProUGUI coinCounterText;

	[SerializeField]
	private GameObject flyingCoinPrefab;

	[SerializeField]
	private Transform uiTarget;

	private int totalCoinsCollected = 0;

	public static CoinManager Instance { get; private set; }

	private void Awake()
	{
		Instance = this;
	}

	private void Start()
	{
		UpdateCoinUI();
	}

	public void CollectCoin(Vector3 coinWorldPosition)
	{
		Vector3 coinCanvasPosition = Camera.main.WorldToScreenPoint(coinWorldPosition);
		SoundManager.Instance.PlayCoinFirstInteractionSound();
		for (int i = 0; i < 5; i++)
		{
			GameObject flyingCoin = Object.Instantiate(flyingCoinPrefab, coinCanvasPosition, Quaternion.identity, base.transform.parent);
			flyingCoin.transform.DOMove(uiTarget.position, 0.8f + (float)i * 0.1f).SetEase(Ease.InOutQuad).OnComplete(delegate
			{
				AddCoins(1);
				Object.Destroy(flyingCoin);
				SoundManager.Instance.PlayCoinSound();
			});
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
