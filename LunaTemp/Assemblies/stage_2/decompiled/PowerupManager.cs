using System.Collections;
using DG.Tweening;
using TMPro;
using UnityEngine;

public class PowerupManager : MonoBehaviour
{
	public static PowerupManager Instance;

	[SerializeField]
	private GameObject bananaPrefab;

	[SerializeField]
	private TextMeshProUGUI placePowerUpText;

	[SerializeField]
	private RectTransform cursor;

	[SerializeField]
	private GameObject powerUpUI;

	private bool isClicked = false;

	public void Clicked()
	{
		isClicked = true;
	}

	private void Awake()
	{
		Instance = this;
		placePowerUpText.transform.DOScale(Vector3.one * 1.5f, 0.5f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine)
			.SetUpdate(true);
		cursor.transform.DOScale(Vector3.one * 1.5f, 0.5f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine)
			.SetUpdate(true);
	}

	public void CollectPowerUp(PowerUpType powerUpType)
	{
		StartCoroutine(HandlePowerUpPlacement(powerUpType));
	}

	private IEnumerator HandlePowerUpPlacement(PowerUpType powerUpType)
	{
		float slowdownDuration = 0.3f;
		float elapsed = 0f;
		while (elapsed < slowdownDuration)
		{
			elapsed += Time.unscaledDeltaTime;
			Time.timeScale = Mathf.Lerp(1f, 0.4f, elapsed / slowdownDuration);
			yield return new WaitForSecondsRealtime(0.02f);
		}
		powerUpUI.SetActive(true);
		Time.timeScale = 0f;
		bool powerUpPlaced = false;
		Vector3 firstPlayerPos = RankManager.Instance.GetFirstRacerPosition() + Vector3.forward * 2f;
		Vector3 screenPos = Camera.main.WorldToScreenPoint(firstPlayerPos);
		cursor.position = screenPos;
		placePowerUpText.text = GetTextForPowerUp(powerUpType);
		while (!powerUpPlaced)
		{
			if (Input.GetMouseButtonDown(0))
			{
				Vector3 mousePosition = Input.mousePosition;
				Ray ray = Camera.main.ScreenPointToRay(mousePosition);
				if (Physics.Raycast(ray, out var hit, float.PositiveInfinity))
				{
					GameObject powerUpPrefab = GetPowerUpPrefab(powerUpType);
					if (powerUpPrefab != null)
					{
						Time.timeScale = 1f;
						Vector3 prefabPos = hit.point;
						prefabPos.y = 0f;
						Object.Instantiate(powerUpPrefab, prefabPos, Quaternion.identity);
						powerUpPlaced = true;
					}
					else
					{
						Debug.LogError("Power-up prefab not found for type: " + powerUpType);
					}
				}
				hit = default(RaycastHit);
			}
			yield return null;
		}
		powerUpUI.SetActive(false);
	}

	private string GetTextForPowerUp(PowerUpType powerUpType)
	{
		if (powerUpType == PowerUpType.Bomb)
		{
			return "Place the bomb!";
		}
		return "Place the power-up on the track!";
	}

	private GameObject GetPowerUpPrefab(PowerUpType powerUpType)
	{
		if (powerUpType == PowerUpType.Bomb)
		{
			return bananaPrefab;
		}
		return null;
	}
}
