using System;
using DG.Tweening;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
	[SerializeField]
	private Transform target;

	[SerializeField]
	private Transform finishTarget;

	private Vector3 offset;

	private void Start()
	{
		offset = base.transform.position - target.position;
		GameManager ınstance = GameManager.Instance;
		ınstance.onRunnerGameEnd = (Action)Delegate.Combine(ınstance.onRunnerGameEnd, new Action(MoveToFinishTarget));
	}

	private void LateUpdate()
	{
		if (GameManager.Instance.isRunnerGameStarted)
		{
			Vector3 newPosition = target.position + offset;
			base.transform.position = newPosition;
		}
	}

	public void MoveToFinishTarget()
	{
		float duration = 0.5f;
		Vector3 finishPosition = finishTarget.position;
		Quaternion finishRotation = finishTarget.rotation;
		base.transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine);
		base.transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine);
	}
}
