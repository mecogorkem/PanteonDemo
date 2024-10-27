using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;
using System.Linq;

public class RankManager : MonoBehaviour
{
    [SerializeField] private Image rankImage; // Assign the RankText UI element in the inspector
    [SerializeField] private List<Sprite> rankSprites; // Assign the Rank Sprites in the inspector
    private CharacterBaseController player; // Assign the Player object in the inspector
    private List<CharacterBaseController> racers;

    private void Start()
    {
        // Find all racers in the race (player and bots)
        racers = FindObjectsOfType<CharacterBaseController>().ToList();
        
        player = racers.Find(r => r.CompareTag("Player"));
    }

    private void FixedUpdate()
    {
        UpdatePlayerRank();
    }

    private void UpdatePlayerRank()
    {
        // Sort racers by their z position in descending order (highest z position first)
        racers = racers.OrderByDescending(r => r.transform.position.z).ToList();

        // Find the player's current rank
        int playerRank = racers.IndexOf(player);

        // Display the player's rank in the UI
        rankImage.sprite = rankSprites[playerRank];
    }
}