using UnityEngine;
using UnityEngine.AI;

[RequireComponent(typeof(NavMeshAgent))]
public class BotController : CharacterBaseController
{
	private Vector3 startingPosition;

	private bool isDead = false;

	private int negativeMove = 0;

	private Transform activeTarget;

	protected override void Awake()
	{
		base.Awake();
		startingPosition = base.transform.position;
	}

	protected override void Start()
	{
		base.Start();
		FindTarget();
	}

	private void FindTarget()
	{
	}

	public override void FixedUpdate()
	{
		if (!isDead)
		{
			base.FixedUpdate();
		}
		if (isDead)
		{
			RealDie();
		}
	}

	protected override void GatherInput()
	{
	}

	protected override void Move()
	{
		base.Move();
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
		FindTarget();
	}

	private new void OnDestroy()
	{
		RankManager.Instance.RemoveRacer(this);
	}

	public void SetNextTarget(Transform nextTarget)
	{
	}
}
