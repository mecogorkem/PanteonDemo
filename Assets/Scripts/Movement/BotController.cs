using System;
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
        startingPosition = transform.position;
    }

    protected  void Start()
    {
        targetPos = NodeManager.Instance.GetFirstNode();
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
        if (targetPos.transform.position.z-transform.position.z < 2f)
        {
            UpdateTargetPosition();
        }
        
        
            // Hedefe doğru hareket et
            direction = (targetPos.transform.position - transform.position).normalized;
            moveDirection.x = direction.x;
            moveDirection.z = direction.z;

            // Hedefe yaklaştıysak yeni hedefi güncelle
          
        
    }

    private void UpdateTargetPosition()
    {
        targetPos = targetPos.nextNode;

    }

    public override void Die()
    {
        isDead = true;
        // Instantiate(Resources.Load("DeathAnim"), transform.position, Quaternion.identity);
        _animator.SetTrigger(_animIsDead);
        deathFlag = true;
        StartCoroutine(DeathAnim());


    }

    public void RealDie()
    {
        isDead = false;
        SoundManager.Instance.PlayBotDeathSound(this.transform);
        transform.position = startingPosition;
        // Hedef pozisyonu sıfırla ve güncelle
        targetPos = NodeManager.Instance.GetFirstNode();
    }
    
    private IEnumerator DeathAnim()
    {
        yield return new WaitForSeconds(1);
         deathFlag = false;
   

    }
    
    
    
    
    
}
