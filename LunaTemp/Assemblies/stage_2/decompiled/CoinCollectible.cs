using DG.Tweening;
using UnityEngine;

public class CoinCollectible : Collectable
{
	private void OnTriggerEnter(Collider other)
	{
		if (!isCollected && other.CompareTag("Player"))
		{
			isCollected = true;
			CoinManager.Instance.CollectCoin(base.transform.position);
			base.transform.DOScale(0f, 0.25f).OnComplete(delegate
			{
				base.gameObject.SetActive(false);
			});
		}
	}
}
