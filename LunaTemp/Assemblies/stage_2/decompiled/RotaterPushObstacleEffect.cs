using System;
using UnityEngine;

public class RotaterPushObstacleEffect : ObstacleBase, IEnterEffect
{
	[SerializeField]
	private float pushForce = 5f;

	public void OnEnterEffect(GameObject character)
	{
		IPushable pushable = character.GetComponent<IPushable>();
		if (pushable != null)
		{
			float degreeX = base.transform.rotation.eulerAngles.y * (3.14159265f / 180f);
			float degree = (base.transform.rotation.eulerAngles.y + 180f) * (3.14159265f / 180f);
			Vector3 pushDirection = new Vector3(Mathf.Cos(degreeX), 0f, Mathf.Sin(degree));
			pushable.Push(pushDirection, pushForce);
		}
	}
}
