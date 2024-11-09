using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Luna.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
	private string paintingScene = "WallPainter";

	public bool isRunnerGameStarted = false;

	public Action onRunnerGameStart;

	public Action onRunnerGameEnd;

	public Action onGameComplete;

	[Header("UI Elements")]
	[SerializeField]
	private GameObject completeGameUI;

	[SerializeField]
	private GameObject startGameUI;

	[SerializeField]
	private TextMeshProUGUI starterText;

	[SerializeField]
	private Image starterImage;

	[SerializeField]
	private List<Sprite> starterImages;

	[SerializeField]
	private TextMeshProUGUI tapToStartText;

	private bool starterFlag = false;

	public bool isGameCompleted;

	public static GameManager Instance { get; private set; }

	private void Awake()
	{
		Instance = this;
		completeGameUI.SetActive(false);
	}

	private void Start()
	{
		startGameUI.SetActive(true);
		AnimateTapToStart();
		QualitySettings.vSyncCount = 0;
		Application.targetFrameRate = 60;
	}

	private void Update()
	{
		if (!isRunnerGameStarted && (Input.GetMouseButtonDown(0) || Input.anyKeyDown) && !starterFlag)
		{
			starterFlag = true;
			StartCoroutine(StartCountdown());
			HideTapToStartText();
		}
	}

	private void AnimateTapToStart()
	{
		tapToStartText.transform.localScale = Vector3.one * 0.8f;
		tapToStartText.transform.DOScale(1.2f, 0.6f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);
	}

	private void HideTapToStartText()
	{
		tapToStartText.DOKill();
		tapToStartText.gameObject.SetActive(false);
	}

	private IEnumerator StartCountdown()
	{
		starterImage.gameObject.SetActive(true);
		string[] countdownTexts = new string[4] { "3", "2", "1", "Go" };
		SoundManager.Instance.PlayCountdownSound();
		for (int i = 0; i < countdownTexts.Length; i++)
		{
			starterText.text = countdownTexts[i];
			if (i < starterImages.Count)
			{
				starterImage.sprite = starterImages[i];
			}
			starterImage.transform.localScale = Vector3.zero;
			starterImage.transform.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutBounce);
			starterImage.transform.DOScale(Vector3.zero * 2f, 0.5f).SetEase(Ease.InBack).SetDelay(0.5f);
			yield return new WaitForSeconds(1f);
		}
		startGameUI.SetActive(false);
		StartGame();
	}

	public void StartGame()
	{
		isRunnerGameStarted = true;
		onRunnerGameStart?.Invoke();
	}

	public void FinishLine()
	{
		isRunnerGameStarted = false;
		onRunnerGameEnd?.Invoke();
		LoadWallPaintingScene();
	}

	private void LoadWallPaintingScene()
	{
		Joystick.Instance.gameObject.SetActive(false);
		if (!SceneManager.GetSceneByName(paintingScene).isLoaded)
		{
			SceneManager.LoadScene(paintingScene, LoadSceneMode.Additive);
		}
	}

	public void CompleteGame()
	{
		onGameComplete?.Invoke();
		isGameCompleted = true;
	}

	public void OpenCompleteGameUI()
	{
		completeGameUI.SetActive(true);
		LifeCycle.GameEnded();
	}

	public void PlayAgain()
	{
		Playable.InstallFullGame();
		DeathCounter.ResetDeathCounter();
		SceneManager.LoadScene(0);
	}
}
