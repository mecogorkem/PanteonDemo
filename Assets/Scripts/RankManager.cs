using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;
using System.Linq;

public class RankManager : MonoBehaviour
{
    [SerializeField] private Image rankImage; // Assign the RankText UI element in the inspector
    [SerializeField] private List<Sprite> rankSprites; // Assign the Rank Sprites in the inspector
    private CharacterBaseController player; // Assign the Player object in the inspector
    [SerializeField] private List<CharacterBaseController> racers;
    public static RankManager Instance { get; private set; }
    private int alreadyFinishedPlayer = 0;
    private void Awake()
    {
        Instance = this;
    }

    private void FixedUpdate()
    {
        if (!GameManager.Instance.isRunnerGameStarted)
        {
            return;
        }
        UpdatePlayerRank();
    }

    private void UpdatePlayerRank()
    {
        // Sort racers by their z position in descending order (highest z position first)
        racers = racers.OrderByDescending(r => r.transform.position.z).ToList();

        // Find the player's current rank
        int playerRank = racers.IndexOf(player)+alreadyFinishedPlayer;

        // Display the player's rank in the UI
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