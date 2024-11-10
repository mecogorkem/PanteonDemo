using System;
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
        startingPosition = transform.position;
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
        if (targetPos.transform.position.z-transform.position.z < 1.5f)
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
    }

    public void RealDie()
    {
        isDead = false;
        Instantiate(Resources.Load("DeathAnim"), transform.position, Quaternion.identity);
        SoundManager.Instance.PlayBotDeathSound(this.transform);

        // Başlangıç pozisyonuna dön
        transform.position = startingPosition;

        // Hedef pozisyonu sıfırla ve güncelle
        targetPos = NodeManager.Instance.GetFirstNode();
    }
}
