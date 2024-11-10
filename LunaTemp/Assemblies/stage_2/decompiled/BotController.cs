using UnityEngine;

public class BotController : CharacterBaseController
{
	private Vector3 startingPosition;

	private bool isDead = false;

	private AINode targetPos;

	private Vector3 direction;

	protected override void Awake()
	{
		base.Awake();
		startingPosition = base.transform.position;
	}

	protected override void Start()
	{
		base.Start();
		targetPos = NodeManager.Instance.GetFirstNode();
	}

	public override void FixedUpdate()
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

	protected override void GatherInput()
	{
		if (Vector3.Distance(base.transform.position, targetPos.transform.position) < 1f)
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
	}

	public void RealDie()
	{
		isDead = false;
		Object.Instantiate(Resources.Load("DeathAnim"), base.transform.position, Quaternion.identity);
		SoundManager.Instance.PlayBotDeathSound(base.transform);
		base.transform.position = startingPosition;
		targetPos = NodeManager.Instance.GetFirstNode();
	}
}
