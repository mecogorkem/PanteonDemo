using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NodeManager : MonoBehaviour
{
    private AINode[] nodes;
    private Vector3 mainPos;
    private Vector3 leftPos;
    private Vector3 rightPos;
    
    private float distToMain;
    private float distToLeft;
    private float distToRight;
    private float minDist;
    
    public static NodeManager Instance { get; private set; }
    private void Awake()
    {
        Instance = this;
        nodes = new AINode[gameObject.transform.childCount];
        for (int i = 0; i < nodes.Length; i++)
        {
            nodes[i] = gameObject.transform.GetChild(i).GetComponent<AINode>();
        }
        Array.Sort(nodes, (x, y) => x.transform.position.z.CompareTo(y.transform.position.z));
        SortNodesByZAxis();
    }

 

    private void SortNodesByZAxis()
    {
        for (int i = 0; i < nodes.Length; i++)
        {
            nodes[i].nextNode = i < nodes.Length - 1 ? nodes[i + 1] : null;
        }
    }
    
    public AINode GetFirstNode()
    {
        return nodes.Length > 0 ? nodes[0] : null;
    }
    // public Vector3 GetNextNode(Vector3 pos)
    // {
    //     Vector3 nextNodePos = Vector3.zero;
    //
    //     for (int i = 0; i < nodes.Count; i++)
    //     {
    //         if (nodes[i].transform.position.z > pos.z+5)
    //         {
    //            
    //
    //             // Offset pozisyonlarını hesapla
    //             mainPos =  nodes[i].transform.position;
    //             leftPos = mainPos +  nodes[i].leftOffset * Vector3.left;
    //             rightPos = mainPos +  nodes[i].rightOffset * Vector3.right;
    //
    //             // Mevcut pozisyona en yakın noktayı bul
    //             distToMain = Vector3.Distance(pos, mainPos);
    //             distToLeft = Vector3.Distance(pos, leftPos);
    //             distToRight = Vector3.Distance(pos, rightPos);
    //
    //             minDist = distToMain;
    //             nextNodePos = mainPos;
    //
    //             if (distToLeft < minDist)
    //             {
    //                 minDist = distToLeft;
    //                 nextNodePos = leftPos;
    //             }
    //
    //             if (distToRight < minDist)
    //             {
    //                 minDist = distToRight;
    //                 nextNodePos = rightPos;
    //             }
    //
    //             break; // Sonraki node bulundu, döngüden çık
    //         }
    //     }
    //
    //     return nextNodePos;
    // }

}
