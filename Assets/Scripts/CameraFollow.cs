using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform target;
    private Vector3 offset;

    private void Start()
    {
        offset = transform.position - target.position;
    }

    private void LateUpdate()
    {
        Vector3 newPosition = target.position + offset;
        // Yalnızca Z ve Y eksenlerinde takip etmek isterseniz X'i sabitleyebilirsiniz
        transform.position = newPosition;
    }
}
