using DG.Tweening;
using UnityEngine;

public class BombPrefab : MonoBehaviour
{
	private bool isCollected = false;

	[SerializeField]
	private ParticleSystem explosionEffect;

	private void OnTriggerEnter(Collider other)
	{
		if (!isCollected && other.CompareTag("Bot"))
		{
			isCollected = true;
			CharacterBaseController character = other.GetComponent<CharacterBaseController>();
			character.Die();
			explosionEffect.Play();
			base.transform.DOScale(0f, 0.25f).OnComplete(delegate
			{
				Object.Destroy(base.gameObject);
			});
		}
	}
}
