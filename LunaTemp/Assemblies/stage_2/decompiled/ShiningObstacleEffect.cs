using DG.Tweening;
using UnityEngine;

public class ShiningObstacleEffect : ObstacleBase, IEnterEffect
{
	[SerializeField]
	private float pushForce = 5f;

	[SerializeField]
	private ParticleSystem shineParticle;

	protected override void Awake()
	{
		base.Awake();
		if (shineParticle != null)
		{
			ParticleSystem.MainModule main = shineParticle.main;
			main.startColor = ColorGenerator.GenerateRandomVibrantColor();
		}
	}

	public void OnEnterEffect(GameObject character)
	{
		IPushable pushable = character.GetComponent<IPushable>();
		if (pushable != null)
		{
			Vector3 collisionDirection = (character.transform.position - base.transform.position).normalized;
			Vector3 pushDirection = collisionDirection;
			pushDirection.y = 0f;
			pushDirection = pushDirection.normalized;
			pushable.Push(pushDirection, pushForce);
			base.transform.DOScale(1.25f, 0.25f).OnComplete(delegate
			{
				base.transform.DOScale(1f, 0.25f);
			});
			if (shineParticle != null)
			{
				ParticleSystem.MainModule main = shineParticle.main;
				main.startColor = ColorGenerator.GenerateRandomVibrantColor();
			}
		}
	}
}
