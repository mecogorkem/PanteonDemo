using System;
using UnityEngine;

public class AINode : MonoBehaviour
{
    public float leftOffset = 1;
    public float rightOffset = 1;
    public AINode nextNode;
 
    // private void OnDrawGizmos()
    // {
    //     // Ana node'u mavi küre olarak çiz
    //     Gizmos.color = Color.blue;
    //     Gizmos.DrawSphere(transform.position, 0.2f);
    //
    //     // Left offset noktasını kırmızı küre olarak çiz
    //     Gizmos.color = Color.red;
    //     Gizmos.DrawSphere(transform.position + leftOffset*Vector3.left, 0.1f);
    //
    //     // Right offset noktasını yeşil küre olarak çiz
    //     Gizmos.color = Color.green;
    //     Gizmos.DrawSphere(transform.position + rightOffset*Vector3.right, 0.1f);
    //
    //     // Left offset noktasından ana node'a çizgi çiz
    //     Gizmos.color = Color.red;
    //     Gizmos.DrawLine(transform.position, transform.position + leftOffset*Vector3.left);
    //
    //     // Right offset noktasından ana node'a çizgi çiz
    //     Gizmos.color = Color.green;
    //     Gizmos.DrawLine(transform.position, transform.position + rightOffset*Vector3.right);
    // }
}