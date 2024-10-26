using UnityEngine;

public class PatrolMovementController : MonoBehaviour
{
    [SerializeField] private Vector3 movementSpeed = new Vector3(1f, 0f, 0f);
    [SerializeField] private float minX = -5f;
    [SerializeField] private float maxX = 5f; 

    private void Update()
    {
        Move();
    }

    private void Move()
    {
        Vector3 deltaMovement = movementSpeed * Time.deltaTime;
        transform.position += deltaMovement;

        if (transform.position.x < minX || transform.position.x > maxX)
        {
            movementSpeed.x = -movementSpeed.x;
        }
    }
}