using System;
using UnityEngine;

public class RotaterPushObstacleEffect : ObstacleBase, IEnterEffect
{
    [SerializeField] private float pushForce = 5f;

    public void OnEnterEffect(GameObject character)
    {
        IPushable pushable = character.GetComponent<IPushable>();
        if (pushable != null)
        {
            // İtme yönü hesaplanır
            var degreeX = (this.transform.rotation.eulerAngles.y)*Mathf.Deg2Rad;
            var degree = (this.transform.rotation.eulerAngles.y +180)*Mathf.Deg2Rad;
            var pushDirection = new Vector3(Mathf.Cos(degreeX), 0, Mathf.Sin(degree));
            pushable.Push(pushDirection, pushForce);
        }
    }

    
}