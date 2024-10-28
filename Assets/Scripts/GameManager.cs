using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using DG.Tweening;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }
    private string paintingScene = "WallPainter";
    public bool isRunnerGameStarted = false;
    public Action onRunnerGameStart;
    public Action onRunnerGameEnd;
    public Action onGameComplete;
    
    [Header("UI Elements")]
    [SerializeField] private GameObject completeGameUI;
    [SerializeField] private GameObject startGameUI;
    [SerializeField] private TextMeshProUGUI starterText;
    [SerializeField] private Image starterImage;
    [SerializeField] private List<Sprite> starterImages;
    [SerializeField] private TextMeshProUGUI tapToStartText; // New "Tap to Start" text element
    private bool starterFlag = false;
    public bool isGameCompleted;

    private void Awake()
    {
        Instance = this;
        completeGameUI.SetActive(false);
    }

    private void Start()
    {
        startGameUI.SetActive(true);
        AnimateTapToStart(); // Start "Tap to Start" animation
    }

    private void Update()
    {
        if (!isRunnerGameStarted && (Input.GetMouseButtonDown(0) || Input.anyKeyDown) && !starterFlag)
        {
            starterFlag = true;
            StartCoroutine(StartCountdown());
            HideTapToStartText(); // Hide "Tap to Start" text on first click
        }
    }

    // Animate "Tap to Start" text with a pulsing effect
    private void AnimateTapToStart()
    {
        tapToStartText.transform.localScale = Vector3.one * 0.8f;
        tapToStartText.transform.DOScale(1.2f, 0.6f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);
    }

    // Hide "Tap to Start" text after clicking
    private void HideTapToStartText()
    {
        tapToStartText.DOKill(); // Stop any ongoing animations
        tapToStartText.gameObject.SetActive(false);
        
    }

    // Countdown coroutine to show "3-2-1-Go" with animations
    private IEnumerator StartCountdown()
    {
        starterImage.gameObject.SetActive(true);
        string[] countdownTexts = { "3", "2", "1", "Go" };
        
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
            starterImage.transform.DOScale(Vector3.zero*2, 0.5f).SetEase(Ease.InBack).SetDelay(0.5f);

            yield return new WaitForSeconds(1f);
        }
        startGameUI.SetActive(false);

        StartGame();
    }

    // Method to begin the game
    public void StartGame()
    {
        isRunnerGameStarted = true;
        onRunnerGameStart?.Invoke();
    }

    // Method triggered when player crosses the finish line
    public void FinishLine()
    {
        isRunnerGameStarted = false;
        onRunnerGameEnd?.Invoke();
        LoadWallPaintingScene();
    }

    // Load the wall-painting scene additively
    private void LoadWallPaintingScene()
    {
        Joystick.Instance.gameObject.SetActive(false);
        
        if (!SceneManager.GetSceneByName(paintingScene).isLoaded)
        {
            SceneManager.LoadScene(paintingScene, LoadSceneMode.Additive);
        }
    }

    // End game or load a final scene when painting is complete
    public void CompleteGame()
    {
        onGameComplete?.Invoke();
        isGameCompleted = true;
    }
    
    public void OpenCompleteGameUI()
    {
        completeGameUI.SetActive(true);
    }
    
    public void PlayAgain()
    {
        SceneManager.LoadScene(0);
    }
}
