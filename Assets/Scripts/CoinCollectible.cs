using UnityEngine;

public class CoinCollectible : MonoBehaviour
{
    private bool isCollected = false;

    private void OnTriggerEnter(Collider other)
    {
        if (isCollected || !other.CompareTag("Player")) return;

        isCollected = true;
        
        // Notify CoinManager of the coin collection and pass the coin's position
        CoinManager.Instance.CollectCoin(transform.position);

        Destroy(gameObject); // Destroy the coin itself
    }
}