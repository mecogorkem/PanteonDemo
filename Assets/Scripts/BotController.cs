using System;
using UnityEngine;
using UnityEngine.AI;

[RequireComponent(typeof(NavMeshAgent))]
public class BotController : CharacterBaseController
{
    private NavMeshAgent _navMeshAgent;
    private Vector3 startingPosition;
    private bool isDead = false;

    protected override void Awake()
    {
        base.Awake();
        _navMeshAgent = GetComponent<NavMeshAgent>();
        _navMeshAgent.updatePosition = false;
        _navMeshAgent.updateRotation = false;
        startingPosition = transform.position;
    }

    protected override void Start()
    {
        base.Start();
        GameObject targetObject = GameObject.FindGameObjectWithTag("Target");
        if (targetObject != null)
        {
            _navMeshAgent.SetDestination(targetObject.transform.position);
        }
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
        // NavMeshAgent'in istediği hızı alıyoruz
        Vector3 desiredVelocity = _navMeshAgent.desiredVelocity;

        // Eğer ajan bir yola sahipse ve istediği hız sıfır değilse, moveDirection'ı güncelliyoruz
        if (_navMeshAgent.hasPath && desiredVelocity != Vector3.zero)
        {
            var pushForce = currentPushForce.magnitude;
            var neededVelocityX = 1.5f*(pushForce/MoveSpeed);
            
            moveDirection = new Vector3(neededVelocityX+desiredVelocity.x, 0.0f, desiredVelocity.z);
        }
        else
        {
            // Debug.Log("No path or desired velocity is zero.");
        }
        // Aksi halde moveDirection'ı değiştirmiyoruz
    }

    protected override void Move()
    {
        base.Move();

        // Sync NavMeshAgent position with CharacterController
        _navMeshAgent.nextPosition = transform.position;
    }

    public override void Die()
    {
        isDead = true;
    }

    public void RealDie()
    {
        isDead = false;
        // Warp the NavMeshAgent to the starting position
        _navMeshAgent.Warp(startingPosition);
        
        // Set destination again
        GameObject targetObject = GameObject.FindGameObjectWithTag("Target");
        if (targetObject != null)
        {
            _navMeshAgent.SetDestination(targetObject.transform.position);
        }
    }

    private void OnDestroy()
    {
        RankManager.Instance.RemoveRacer(this);
    }
}