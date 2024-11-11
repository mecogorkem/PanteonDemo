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
    public Vector3 GetPosition()
    {
        
        return this.transform.position;

        // Calculate the main node, left offset, and right offset positions
        Vector3 mainPosition = transform.position;
        Vector3 leftPosition = mainPosition + leftOffset * Vector3.left;
        Vector3 rightPosition = mainPosition + rightOffset * Vector3.right;

        // Choose a random index between 0 and 2
        int randomIndex = UnityEngine.Random.Range(0, 3);

        // Return the position based on the random index
        switch (randomIndex)
        {
            case 0:
                return mainPosition;
            case 1:
                return leftPosition;
            case 2:
                return rightPosition;
            default:
                return mainPosition; // Fallback in case of an unexpected value
        }
    }

}