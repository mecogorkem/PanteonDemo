using DG.Tweening;
using UnityEngine;

public class CoinCollectible : Collectable
{
    private void OnTriggerEnter(Collider other)
    {
        if (isCollected || !other.CompareTag("Player")) return;

        isCollected = true;
        
        // Notify CoinManager of the coin collection and pass the coin's position
        CoinManager.Instance.CollectCoin(transform.position);

        transform.DOScale(0, 0.25f).OnComplete(() =>
        {
            gameObject.SetActive(false);
        });
    }
}