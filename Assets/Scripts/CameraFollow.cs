using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening; // Ensure you have DoTween imported

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform target; // The target to follow initially
    [SerializeField] private Transform finishTarget; // The target to move towards after the finish line
    private Vector3 offset;

    private void Start()
    {
        offset = transform.position - target.position;
        GameManager.Instance.onRunnerGameEnd += MoveToFinishTarget;
    }

    private void LateUpdate()
    {
        if (GameManager.Instance.isRunnerGameStarted == false)
        {
            return;
        }
        Vector3 newPosition = target.position + offset;
        transform.position = newPosition;
    }

    // Method to move the camera to the finish target position using DoTween
    public void MoveToFinishTarget()
    {
        float duration = 0.5f;
        Vector3 finishPosition = finishTarget.position;
        var finishRotation = finishTarget.rotation;
        transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine);
        transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine);
    }
    
    
    
}
