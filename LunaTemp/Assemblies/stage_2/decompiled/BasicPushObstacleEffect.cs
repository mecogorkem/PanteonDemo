using UnityEngine;

public class BasicPushObstacleEffect : ObstacleBase, IStayEffect
{
	[SerializeField]
	private Vector3 pushVector = new Vector3(0f, 0f, 0f);

	public void OnStayEffect(GameObject character)
	{
		IPushable pushable = character.GetComponent<IPushable>();
		if (pushable != null)
		{
			Vector3 pushDirection = pushVector.normalized;
			float pushForce = pushVector.magnitude;
			pushable.PushNoSound(pushDirection, pushForce);
		}
	}
}
