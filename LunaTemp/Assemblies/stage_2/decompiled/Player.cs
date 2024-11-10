using System;
using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Player : MonoBehaviour
{
	[SerializeField]
	private Transform playerEndTransform;

	[SerializeField]
	private Transform playerGameCompleteTransform;

	private CharacterBaseController _characterBaseController;

	protected void Start()
	{
		GameManager ınstance = GameManager.Instance;
		ınstance.onRunnerGameEnd = (Action)Delegate.Combine(ınstance.onRunnerGameEnd, new Action(MoveToFinishTarget));
		GameManager ınstance2 = GameManager.Instance;
		ınstance2.onGameComplete = (Action)Delegate.Combine(ınstance2.onGameComplete, new Action(MoveToGameCompleteTarget));
		_characterBaseController = GetComponent<CharacterBaseController>();
		_characterBaseController.OnDeath = Die;
	}

	private void MoveToGameCompleteTarget()
	{
		if (_characterBaseController._hasAnimator)
		{
			_characterBaseController._animator.SetFloat(_characterBaseController._animIDSpeed, 1f);
			_characterBaseController._animator.SetFloat(_characterBaseController._animIDMotionSpeed, 0.5f);
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
				if (_characterBaseController._hasAnimator)
				{
					_characterBaseController._animator.SetFloat(_characterBaseController._animIDSpeed, 0f);
					_characterBaseController._animator.SetFloat(_characterBaseController._animIDMotionSpeed, 0.5f);
					_characterBaseController._animator.SetBool(_characterBaseController._animIEnd, true);
					GameManager.Instance.OpenCompleteGameUI();
				}
			});
		});
		_characterBaseController.moveDirection = Vector3.zero;
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
			if (_characterBaseController._hasAnimator)
			{
				_characterBaseController._animator.SetFloat(_characterBaseController._animIDSpeed, 0f);
				_characterBaseController._animator.SetFloat(_characterBaseController._animIDMotionSpeed, 0.5f);
			}
		});
		_characterBaseController.moveDirection = Vector3.zero;
	}

	public void Die()
	{
		SceneManager.LoadScene(SceneManager.GetActiveScene().name);
	}
}
