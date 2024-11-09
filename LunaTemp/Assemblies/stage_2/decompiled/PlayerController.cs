using System;
using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerController : CharacterBaseController
{
	[SerializeField]
	private Transform playerEndTransform;

	[SerializeField]
	private Transform playerGameCompleteTransform;

	private Joystick joystick;

	protected override void Start()
	{
		base.Start();
		joystick = Joystick.Instance;
		GameManager ınstance = GameManager.Instance;
		ınstance.onRunnerGameEnd = (Action)Delegate.Combine(ınstance.onRunnerGameEnd, new Action(MoveToFinishTarget));
		GameManager ınstance2 = GameManager.Instance;
		ınstance2.onGameComplete = (Action)Delegate.Combine(ınstance2.onGameComplete, new Action(MoveToGameCompleteTarget));
	}

	private void MoveToGameCompleteTarget()
	{
		if (_hasAnimator)
		{
			_animator.SetFloat(_animIDSpeed, 1f);
			_animator.SetFloat(_animIDMotionSpeed, 0.5f);
		}
		float duration = 0.5f;
		Vector3 finishPosition = playerGameCompleteTransform.position;
		Quaternion finishRotation = playerGameCompleteTransform.rotation;
		TweenerCore<Vector3, Vector3, VectorOptions> tweenerCore = base.transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine);
		tweenerCore.onComplete = (TweenCallback)Delegate.Combine(tweenerCore.onComplete, (TweenCallback)delegate
		{
			TweenerCore<Quaternion, Vector3, QuaternionOptions> tweenerCore2 = base.transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine);
			tweenerCore2.onComplete = (TweenCallback)Delegate.Combine(tweenerCore2.onComplete, (TweenCallback)delegate
			{
				if (_hasAnimator)
				{
					_animator.SetFloat(_animIDSpeed, 0f);
					_animator.SetFloat(_animIDMotionSpeed, 0.5f);
					_animator.SetBool(_animIEnd, true);
					GameManager.Instance.OpenCompleteGameUI();
				}
			});
		});
		moveDirection = Vector3.zero;
	}

	private void MoveToFinishTarget()
	{
		float duration = 0.5f;
		Vector3 finishPosition = playerEndTransform.position;
		Quaternion finishRotation = playerEndTransform.rotation;
		base.transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine);
		TweenerCore<Vector3, Vector3, VectorOptions> tweenerCore = base.transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine);
		tweenerCore.onComplete = (TweenCallback)Delegate.Combine(tweenerCore.onComplete, (TweenCallback)delegate
		{
			if (_hasAnimator)
			{
				_animator.SetFloat(_animIDSpeed, 0f);
				_animator.SetFloat(_animIDMotionSpeed, 0.5f);
			}
		});
		moveDirection = Vector3.zero;
	}

	protected override void GatherInput()
	{
		Vector2 joystickInput = joystick.GetInputVector();
		if (joystickInput != Vector2.zero)
		{
			moveDirection = new Vector3(joystickInput.x, 0f, joystickInput.y);
			return;
		}
		float horizontal = Input.GetAxis("Horizontal");
		float vertical = Input.GetAxis("Vertical");
		moveDirection = new Vector3(horizontal, 0f, vertical);
	}

	public override void Die()
	{
		SceneManager.LoadScene(SceneManager.GetActiveScene().name);
	}
}
