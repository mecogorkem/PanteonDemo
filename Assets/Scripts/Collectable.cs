using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Collectable : MonoBehaviour
{  
    [SerializeField] private float distance = 0.25f;
    [SerializeField] private float moveTime = 1;
    protected bool isCollected = false;
    protected virtual void Start()
    {
        CoinMove();
    }

    

    private void CoinMove() { 
        transform.DOMoveY(transform.position.y + distance, moveTime)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);
    }
    
    
}
