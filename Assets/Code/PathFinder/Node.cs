using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Node :IHeapItem<Node>
{
    public bool walkable;
    public Vector2 worldPosition;
    public int gCost;
    public int hCost;
    GameObject tile;
    public int gridX;
    public bool isTarget;
    public int gridY;
    public Node parent;
    int heapIntex;
    public Node(bool _walkable, Vector2 _worldPos,int _gridX,int _gridY,GameObject _tile,bool _isOffset)
    {
        walkable = _walkable;
        worldPosition = _worldPos;
        gridX = _gridX;
        gridY = _gridY;
        tile = _tile;
        tile.transform.position = _worldPos;

        tile.GetComponent<Tile>().Init(_isOffset);
    }

    

    public int fCost
    {
        get
        {
            return gCost+hCost;
        }
        
    }

    public int HeapIndex {
        get
        {
            return heapIntex;
        }
        set
        {
            heapIntex = value;
        }
    }

    public int CompareTo(Node other)
    {
        int compare = fCost.CompareTo(other.fCost);
        if(compare == 0)
        {
            compare = hCost.CompareTo(other.hCost);
        }

        return -compare;

    }
}
