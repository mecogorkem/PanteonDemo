using System;
using UnityEngine;
using UnityEngine.UI;

public class RankManager : MonoBehaviour
{
	[SerializeField]
	private Image rankImage;

	[SerializeField]
	private Sprite[] rankSprites;

	private CharacterBaseController player;

	[SerializeField]
	private CharacterBaseController[] racers;

	private int alreadyFinishedPlayer = 0;

	public static RankManager Instance { get; private set; }

	private void Awake()
	{
		Instance = this;
		racers = new CharacterBaseController[base.transform.childCount];
		for (int i = 0; i < base.transform.childCount; i++)
		{
			racers[i] = base.transform.GetChild(i).GetComponent<CharacterBaseController>();
			if (base.transform.GetChild(i).CompareTag("Player"))
			{
				player = racers[i];
			}
		}
	}

	private void FixedUpdate()
	{
		if (GameManager.Instance.isRunnerGameStarted)
		{
			UpdatePlayerRank();
		}
	}

	private void UpdatePlayerRank()
	{
		Array.Sort(racers, (CharacterBaseController racer1, CharacterBaseController racer2) => racer2.transform.position.z.CompareTo(racer1.transform.position.z));
		int playerRank = Array.IndexOf(racers, player) + alreadyFinishedPlayer;
		rankImage.sprite = rankSprites[playerRank];
	}

	public void RemoveRacer(CharacterBaseController racer)
	{
		CharacterBaseController[] newRacers = new CharacterBaseController[racers.Length - 1];
		int index = 0;
		for (int i = 0; i < racers.Length; i++)
		{
			if (racers[i] != racer)
			{
				newRacers[index] = racers[i];
				index++;
			}
		}
		racers = newRacers;
		alreadyFinishedPlayer++;
	}

	public Vector3 GetFirstRacerPosition()
	{
		CharacterBaseController[] array = racers;
		foreach (CharacterBaseController racer in array)
		{
			if (!racer.CompareTag("Player"))
			{
				return racer.transform.position;
			}
		}
		return player.transform.position;
	}
}
