using UnityEngine;

public class CoinCollectible : MonoBehaviour
{
	private bool isCollected = false;

	private void OnTriggerEnter(Collider other)
	{
		if (!isCollected && other.CompareTag("Player"))
		{
			isCollected = true;
			CoinManager.Instance.CollectCoin(base.transform.position);
			Object.Destroy(base.gameObject);
		}
	}
}
