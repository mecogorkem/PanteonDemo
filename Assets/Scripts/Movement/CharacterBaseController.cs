using System;
using UnityEngine;
using UnityEngine.SceneManagement;

[RequireComponent(typeof(CharacterController))]
public abstract class CharacterBaseController : MonoBehaviour, IPushable, IDeathHandler
{
    [Header("Movement Settings")]
    [SerializeField] protected float MoveSpeed = 5f;
    [SerializeField] protected float SpeedChangeRate = 10f;
    [SerializeField] protected float RotationSmoothTime = 0.12f;
    [SerializeField] protected float gravity = 9.8f;
    [SerializeField] protected float fallThreshold = -10f;
    
    [Header("Push Settings")]
    [SerializeField] protected float pushForceDecayRate = 5f;

    protected CharacterController _controller;
    public Animator _animator;

    protected Vector3 currentPushForce = Vector3.zero;
    public Vector3 moveDirection = Vector3.zero;
    protected float _speed;
    protected float _targetRotation = 0.0f;
    protected float _rotationVelocity;
    protected float _verticalVelocity;

    public bool _hasAnimator;
    public int _animIDSpeed;
    public int _animIDMotionSpeed;
    public int _animIEnd;
    protected int _animIsDead;
    
    private float currentHorizontalSpeed;
    private float speedOffset;
    private float inputMagnitude;
    private Vector3 totalMovement;
    private float targetSpeed;
    private float rotation;
    
    public Action OnDeath;

    
    protected virtual void Awake()
    {
        _controller = GetComponent<CharacterController>();
        _animator = GetComponent<Animator>();
        _hasAnimator = _animator != null;
        AssignAnimationIDs();
    }
    

    public virtual void FixedUpdate()
    {
        if (!GameManager.Instance.isRunnerGameStarted)
        {
            return;
        }
        _controller.height = 1.6f;

        ApplyGravity();
        GatherInput();
        Move();
        AnimatorUpdate();
        ApplyPushForce();
        CheckFallBelowThreshold();
    }

    protected void AssignAnimationIDs()
    {
        if (_hasAnimator)
        {
            _animIDSpeed = Animator.StringToHash("Speed");
            _animIDMotionSpeed = Animator.StringToHash("MotionSpeed");
            _animIEnd = Animator.StringToHash("End");
            _animIsDead = Animator.StringToHash("IsDead");
        }
    }

    protected abstract void GatherInput();  // To be implemented by PlayerController and BotController

    protected virtual void Move()
    {
        targetSpeed = MoveSpeed;
        if (moveDirection == Vector3.zero) targetSpeed = 0.0f;

        currentHorizontalSpeed = new Vector3(_controller.velocity.x, 0.0f, _controller.velocity.z).magnitude;
        speedOffset = 0.1f;
        inputMagnitude = Mathf.Clamp01(moveDirection.magnitude);

        // Smoothly accelerate or decelerate to target speed
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
            _targetRotation = Mathf.Atan2(inputDirection.x, inputDirection.z) * Mathf.Rad2Deg;
            rotation = Mathf.SmoothDampAngle(transform.eulerAngles.y, _targetRotation, ref _rotationVelocity, RotationSmoothTime);
            transform.rotation = Quaternion.Euler(0.0f, rotation, 0.0f);
        }

        totalMovement = (Quaternion.Euler(0.0f, _targetRotation, 0.0f) * Vector3.forward) * _speed;
        totalMovement.y = _verticalVelocity;

        _controller.Move(totalMovement * Time.deltaTime);
        
       
    }
    
    protected virtual void AnimatorUpdate()
    {
        if (_hasAnimator)
        {
            _animator.SetFloat(_animIDSpeed, _speed);
            _animator.SetFloat(_animIDMotionSpeed, inputMagnitude+0.5f);
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
        // Apply push force independently of player movement
        if (currentPushForce.magnitude > 0.2f)
        {
            // Move the transform with push force
            this.transform.position += currentPushForce * Time.deltaTime;

            // Decay the push force over time
            currentPushForce = Vector3.Lerp(currentPushForce, Vector3.zero, pushForceDecayRate * Time.deltaTime);
        }
        else
        {
            currentPushForce = Vector3.zero;
        }
    }

    public void Push(Vector3 direction, float force)
    {
        SoundManager.Instance.PlayPushSound(this.transform);
        currentPushForce = direction.normalized * force;
    }

    public void PushNoSound(Vector3 direction, float force)
    {
        currentPushForce = direction.normalized * force;
    }

    protected virtual void CheckFallBelowThreshold()
    {
        if (transform.position.y < fallThreshold)
        {
            Die();
        }
    }

    public virtual void Die()
    {
        OnDeath?.Invoke();
    }

    public virtual void OnDestroy()
    {
        RankManager.Instance.RemoveRacer(this);
    }
}
