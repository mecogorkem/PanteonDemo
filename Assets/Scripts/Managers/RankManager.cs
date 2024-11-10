using System;
using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;
using System.Linq;

public class RankManager : MonoBehaviour
{
    [SerializeField] private Image rankImage; // Assign the RankText UI element in the inspector
    [SerializeField] private Sprite[] rankSprites; // Assign the Rank Sprites in the inspector
    private CharacterBaseController player; // Assign the Player object in the inspector
    [SerializeField] private CharacterBaseController[] racers;
    public static RankManager Instance { get; private set; }
    private int alreadyFinishedPlayer = 0;
    private void Awake()
    {
        Instance = this;
        racers = new CharacterBaseController[this.transform.childCount];
        for (int i = 0; i < this.transform.childCount; i++)
        {
            racers[i] = this.transform.GetChild(i).GetComponent<CharacterBaseController>();
            if (this.transform.GetChild(i).CompareTag("Player"))
            {
                player = racers[i];
            }
        }
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
        Array.Sort(racers, (racer1, racer2) => racer2.transform.position.z.CompareTo(racer1.transform.position.z));    

        // Find the player's current rank
        int playerRank = Array.IndexOf(racers, player) + alreadyFinishedPlayer;

        // Display the player's rank in the UI
        rankImage.sprite = rankSprites[playerRank];
    }
    
    public void RemoveRacer(CharacterBaseController racer)
    {
        // Create a new array with one less element
        CharacterBaseController[] newRacers = new CharacterBaseController[racers.Length - 1];
        int index = 0;

        // Copy all racers except the one to remove
        for (int i = 0; i < racers.Length; i++)
        {
            if (racers[i] != racer)
            {
                newRacers[index] = racers[i];
                index++;
            }
        }

        // Replace the old array with the new one
        racers = newRacers;

        // Increment the already finished player count
        alreadyFinishedPlayer++;
    }
    
    public Vector3 GetFirstRacerPosition()
    {
        foreach (CharacterBaseController racer in racers)
        {
            if (!racer.CompareTag("Player"))
            {
                return racer.transform.position;
            }
        }
        return player.transform.position;
    }


 
    
    
    
}