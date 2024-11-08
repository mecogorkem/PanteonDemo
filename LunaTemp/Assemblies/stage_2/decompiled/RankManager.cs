using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public class RankManager : MonoBehaviour
{
	[SerializeField]
	private Image rankImage;

	[SerializeField]
	private List<Sprite> rankSprites;

	private CharacterBaseController player;

	[SerializeField]
	private List<CharacterBaseController> racers;

	private int alreadyFinishedPlayer = 0;

	public static RankManager Instance { get; private set; }

	private void Awake()
	{
		Instance = this;
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
		racers = racers.OrderByDescending((CharacterBaseController r) => r.transform.position.z).ToList();
		int playerRank = racers.IndexOf(player) + alreadyFinishedPlayer;
		rankImage.sprite = rankSprites[playerRank];
	}

	public void RemoveRacer(CharacterBaseController racer)
	{
		racers.Remove(racer);
		alreadyFinishedPlayer++;
	}

	public void AddRacer(CharacterBaseController characterBaseController)
	{
		racers.Add(characterBaseController);
		if (characterBaseController.CompareTag("Player"))
		{
			player = characterBaseController;
		}
	}
}
