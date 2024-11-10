using System.Collections;
using UnityEngine;

public class BotController : CharacterBaseController
{
	private Vector3 startingPosition;

	private bool isDead = false;

	private AINode targetPos;

	private Vector3 direction;

	private bool deathFlag = false;

	protected override void Awake()
	{
		base.Awake();
		startingPosition = base.transform.position;
	}

	protected void Start()
	{
		targetPos = NodeManager.Instance.GetFirstNode();
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
		if (targetPos.transform.position.z - base.transform.position.z < 2f)
		{
			UpdateTargetPosition();
		}
		direction = (targetPos.transform.position - base.transform.position).normalized;
		moveDirection.x = direction.x;
		moveDirection.z = direction.z;
	}

	private void UpdateTargetPosition()
	{
		targetPos = targetPos.nextNode;
	}

	public override void Die()
	{
		isDead = true;
		_animator.SetTrigger(_animIsDead);
		deathFlag = true;
		StartCoroutine(DeathAnim());
	}

	public void RealDie()
	{
		isDead = false;
		SoundManager.Instance.PlayBotDeathSound(base.transform);
		base.transform.position = startingPosition;
		targetPos = NodeManager.Instance.GetFirstNode();
	}

	private IEnumerator DeathAnim()
	{
		yield return new WaitForSeconds(1f);
		deathFlag = false;
	}
}
