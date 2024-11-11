using System.Collections;
using UnityEngine;

public class BotController : CharacterBaseController
{
	private Vector3 startingPosition;

	private bool isDead = false;

	private AINode targetNode;

	private Vector3 targetPos;

	private Vector3 direction;

	private bool deathFlag = false;

	protected override void Awake()
	{
		base.Awake();
		startingPosition = base.transform.position;
	}

	protected void Start()
	{
		targetNode = NodeManager.Instance.GetFirstNode();
		targetPos = targetNode.GetPosition();
	}

	public override void FixedUpdate()
	{
		if (!deathFlag)
		{
			if (!isDead)
			{
				base.FixedUpdate();
			}
			else
			{
				RealDie();
			}
		}
	}

	protected override void GatherInput()
	{
		if (targetPos.z - base.transform.position.z < 2f)
		{
			UpdateTargetPosition();
		}
		direction = (targetPos - base.transform.position).normalized;
		moveDirection.x = direction.x;
		moveDirection.z = direction.z;
	}

	private void UpdateTargetPosition()
	{
		targetNode = targetNode.nextNode;
		targetPos = targetNode.GetPosition();
	}

	public override void Die()
	{
		OnDeath?.Invoke();
		isDead = true;
		_animator.SetTrigger(_animIsDead);
		deathFlag = true;
		_controller.enabled = false;
		StartCoroutine(DeathAnim());
	}

	public void RealDie()
	{
		isDead = false;
		_controller.enabled = true;
		SoundManager.Instance.PlayBotDeathSound(base.transform);
		base.transform.position = startingPosition;
		targetNode = NodeManager.Instance.GetFirstNode();
		targetPos = targetNode.GetPosition();
	}

	private IEnumerator DeathAnim()
	{
		yield return new WaitForSeconds(1f);
		deathFlag = false;
	}
}
