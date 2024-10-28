using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NextTarget : MonoBehaviour
{
    [SerializeField] private Transform nextTarget;
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Bot"))
        {
            other.GetComponent<BotController>().SetNextTarget(nextTarget);
        }
    }
}