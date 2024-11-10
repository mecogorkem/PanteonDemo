using DG.Tweening;
using UnityEngine;

public class PowerUp : Collectable
{
	[SerializeField]
	private PowerUpType powerUpType;

	private void OnTriggerEnter(Collider other)
	{
		if (!isCollected && other.CompareTag("Player"))
		{
			isCollected = true;
			PowerupManager.Instance.CollectPowerUp(powerUpType);
			base.transform.DOScale(0f, 0.25f).OnComplete(delegate
			{
				base.gameObject.SetActive(false);
			});
		}
	}
}
