using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

public class BasicPushObstacleEffect : ObstacleBase, IStayEffect
{
    [SerializeField] private Vector3 pushVector = new Vector3(0, 0, 0);
    
    public void OnStayEffect(GameObject character)
    {
        IPushable pushable = character.GetComponent<IPushable>();
        if (pushable != null)
        {
            var pushDirection = pushVector.normalized;
            var pushForce = pushVector.magnitude;
            pushable.Push(pushDirection, pushForce);
        }
        
    }
}