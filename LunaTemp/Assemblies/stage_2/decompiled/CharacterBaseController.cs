using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public abstract class CharacterBaseController : MonoBehaviour, IPushable, IDeathHandler
{
	[Header("Movement Settings")]
	[SerializeField]
	protected float MoveSpeed = 5f;

	[SerializeField]
	protected float SpeedChangeRate = 10f;

	[SerializeField]
	protected float RotationSmoothTime = 0.12f;

	[SerializeField]
	protected float gravity = 9.8f;

	[SerializeField]
	protected float fallThreshold = -10f;

	[Header("Push Settings")]
	[SerializeField]
	protected float pushForceDecayRate = 5f;

	protected CharacterController _controller;

	protected Animator _animator;

	protected Vector3 currentPushForce = Vector3.zero;

	protected Vector3 moveDirection = Vector3.zero;

	protected float _speed;

	protected float _targetRotation = 0f;

	protected float _rotationVelocity;

	protected float _verticalVelocity;

	protected bool _hasAnimator;

	protected int _animIDSpeed;

	protected int _animIDMotionSpeed;

	protected virtual void Awake()
	{
		_controller = GetComponent<CharacterController>();
		_animator = GetComponent<Animator>();
		_hasAnimator = _animator != null;
		AssignAnimationIDs();
	}

	protected virtual void Start()
	{
		RankManager.Instance.AddRacer(this);
	}

	public virtual void FixedUpdate()
	{
		if (GameManager.Instance.isRunnerGameStarted)
		{
			_controller.height = 1.6f;
			ApplyGravity();
			GatherInput();
			Move();
			ApplyPushForce();
			CheckFallBelowThreshold();
		}
	}

	protected void AssignAnimationIDs()
	{
		if (_hasAnimator)
		{
			_animIDSpeed = Animator.StringToHash("Speed");
			_animIDMotionSpeed = Animator.StringToHash("MotionSpeed");
		}
	}

	protected abstract void GatherInput();

	protected virtual void Move()
	{
		float targetSpeed = MoveSpeed;
		if (moveDirection == Vector3.zero)
		{
			targetSpeed = 0f;
		}
		float currentHorizontalSpeed = new Vector3(_controller.velocity.x, 0f, _controller.velocity.z).magnitude;
		float speedOffset = 0.1f;
		float inputMagnitude = Mathf.Clamp01(moveDirection.magnitude);
		if (Mathf.Abs(currentHorizontalSpeed - targetSpeed) > speedOffset)
		{
			_speed = Mathf.Lerp(currentHorizontalSpeed, targetSpeed * inputMagnitude, Time.deltaTime * SpeedChangeRate);
			_speed = Mathf.Round(_speed * 1000f) / 1000f;
		}
		else
		{
			_speed = targetSpeed;
		}
		Vector3 inputDirection = moveDirection.normalized;
		if (moveDirection != Vector3.zero)
		{
			_targetRotation = Mathf.Atan2(inputDirection.x, inputDirection.z) * 57.29578f;
			float rotation = Mathf.SmoothDampAngle(base.transform.eulerAngles.y, _targetRotation, ref _rotationVelocity, RotationSmoothTime);
			base.transform.rotation = Quaternion.Euler(0f, rotation, 0f);
		}
		Vector3 totalMovement = Quaternion.Euler(0f, _targetRotation, 0f) * Vector3.forward * _speed;
		totalMovement.y = _verticalVelocity;
		_controller.Move(totalMovement * Time.deltaTime);
		if (_hasAnimator)
		{
			_animator.SetFloat(_animIDSpeed, _speed);
			_animator.SetFloat(_animIDMotionSpeed, inputMagnitude + 0.5f);
		}
	}

	protected void ApplyGravity()
	{
		if (_controller.isGrounded)
		{
			_verticalVelocity = -1f;
		}
		else
		{
			_verticalVelocity -= gravity * Time.deltaTime;
		}
	}

	private void ApplyPushForce()
	{
		if (currentPushForce.magnitude > 0.2f)
		{
			base.transform.position += currentPushForce * Time.deltaTime;
			currentPushForce = Vector3.Lerp(currentPushForce, Vector3.zero, pushForceDecayRate * Time.deltaTime);
		}
		else
		{
			currentPushForce = Vector3.zero;
		}
	}

	public void Push(Vector3 direction, float force)
	{
		SoundManager.Instance.PlayPushSound(base.transform);
		currentPushForce = direction.normalized * force;
	}

	public void PushNoSound(Vector3 direction, float force)
	{
		currentPushForce = direction.normalized * force;
	}

	protected virtual void CheckFallBelowThreshold()
	{
		if (base.transform.position.y < fallThreshold)
		{
			Die();
		}
	}

	public abstract void Die();

	public virtual void OnDestroy()
	{
		RankManager.Instance.RemoveRacer(this);
	}
}