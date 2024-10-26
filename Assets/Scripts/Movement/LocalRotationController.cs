using UnityEngine;

public class LocalRotationController : MonoBehaviour
{
    [SerializeField] private Vector3 rotationSpeed = new Vector3(0f, 0f, 0f);

    private void Update()
    {
        Rotate();
    }

    private void Rotate()
    {
        Vector3 deltaRotation = rotationSpeed * Time.deltaTime;
        transform.Rotate(deltaRotation, Space.Self);
    }
}