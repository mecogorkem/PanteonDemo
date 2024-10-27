using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FinishLine : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            GameManager.Instance.FinishLine();
        }

        if (other.CompareTag("Bot"))
        {
            GameObject.Destroy(other.gameObject);
        }
    }
}
