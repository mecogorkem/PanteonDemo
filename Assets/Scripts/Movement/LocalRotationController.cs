using System;
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
        transform.Rotate(rotationSpeed * Time.deltaTime, Space.Self);
        
    }
}