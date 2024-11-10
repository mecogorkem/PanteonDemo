using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class PowerUp : Collectable
{
    [SerializeField] private PowerUpType powerUpType;
    private void OnTriggerEnter(Collider other)
    {
        if (isCollected || !other.CompareTag("Player")) return;

        isCollected = true;
        
        // Notify CoinManager of the coin collection and pass the coin's position
        PowerupManager.Instance.CollectPowerUp(powerUpType);

        transform.DOScale(0, 0.25f).OnComplete(() =>
        {
            gameObject.SetActive(false);
        });
    }
}
