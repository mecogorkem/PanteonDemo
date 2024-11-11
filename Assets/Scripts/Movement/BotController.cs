using System;
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
        startingPosition = transform.position;
    }

    protected  void Start()
    {
        targetNode = NodeManager.Instance.GetFirstNode();
        targetPos = targetNode.GetPosition();
    }

    public override void FixedUpdate()
    {
        if (deathFlag)
        {
            return;
        }
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
        if (targetPos.z-transform.position.z < 2f)
        {
            UpdateTargetPosition();
        }
        
        
            // Hedefe doğru hareket et
            direction = (targetPos - transform.position).normalized;
            moveDirection.x = direction.x;
            moveDirection.z = direction.z;

            // Hedefe yaklaştıysak yeni hedefi güncelle
          
        
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
        // Instantiate(Resources.Load("DeathAnim"), transform.position, Quaternion.identity);
        _animator.SetTrigger(_animIsDead);
        deathFlag = true;
        _controller.enabled = false;
        StartCoroutine(DeathAnim());


    }

    public void RealDie()
    {
        isDead = false;
        _controller.enabled = true;
        SoundManager.Instance.PlayBotDeathSound(this.transform);
        transform.position = startingPosition;
        // Hedef pozisyonu sıfırla ve güncelle
        targetNode = NodeManager.Instance.GetFirstNode();
        targetPos = targetNode.GetPosition();

    }
    
    private IEnumerator DeathAnim()
    {
        yield return new WaitForSeconds(1);
         deathFlag = false;
   

    }
    
    
    
    
    
}
