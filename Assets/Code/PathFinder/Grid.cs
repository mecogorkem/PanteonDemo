using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Grid : MonoBehaviour
{
    public GameObject tilePrefab;
    public bool displayGismos= true;
    public Transform player;
    public LayerMask unwalkableMask;
    public Vector2 gridWorldSize;
    public float nodeRadius;
    Node[,] grid;
    float nodeDiameter;
    int gridSizeX, gridSizeY;
    public GameObject tiles;

    void Awake()
    {
        QualitySettings.vSyncCount = 1;
        Application.targetFrameRate = 60;
        nodeDiameter = nodeRadius * 2;
        gridSizeX = Mathf.RoundToInt(gridWorldSize.x / nodeDiameter);
        gridSizeY = Mathf.RoundToInt(gridWorldSize.y / nodeDiameter);
        CreateGrid();

    }
    public int MaxSize
    {
        get
        {
            return gridSizeX * gridSizeY;
        }
    }
    void CreateGrid()
    {
        grid = new Node[gridSizeX, gridSizeY];
        Vector2 worldBottomLeft = (Vector2)transform.position - Vector2.right * gridWorldSize.x / 2 - Vector2.up * gridWorldSize.y / 2;
        Vector2 box = Vector2.one * (nodeDiameter - 0.03f);

        for (int x = 0; x < gridSizeX; x++)
        {
            for (int y = 0; y < gridSizeY; y++)
            {
                Vector2 worldPoint = worldBottomLeft + Vector2.right * (x * nodeDiameter + nodeRadius) + Vector2.up*(y * nodeDiameter + nodeRadius);
                bool walkable = !(Physics2D.OverlapCircle(worldPoint, nodeRadius - 0.02f, unwalkableMask));
                bool isOffset = (x + y) % 2 == 0 ? true : false;
                GameObject s = Instantiate(tilePrefab);
                s.transform.parent = tiles.transform;
                grid[x, y] = new Node(walkable, worldPoint,x,y,s,isOffset);
            }
        }

    }
    public List<Node> GetNeighbours(Node node)
    {
        List<Node> neighbours = new List<Node>();
        for(int x = -1; x <= 1; x++)
        {
            for (int y = -1; y <= 1; y++)
            {
                if(x == 0 && y == 0)
                {
                    continue;
                }
                int checkX = node.gridX + x;
                int checkY = node.gridY + y;
                if(checkX >=0 && checkX < gridSizeX && checkY>=0 && checkY<gridSizeY)
                {
                    neighbours.Add(grid[checkX, checkY]);
                }
            }
        }

        return neighbours;
    }

    public bool CheckWalkableArea(Node node,int sizeX,int sizeY)
    {
        for(int i =0;i<sizeX; i++)
        {
            for(int j = 0; j < sizeY; j++)
            {
                if (!(node.gridX + i >= 0 && node.gridX + i < gridSizeX && node.gridY - j >= 0 && node.gridY - j < gridSizeY)) {
                    return false;
                }
                if (!grid[node.gridX + i, node.gridY - j].walkable)
                {
                 
                        return false;
                }
            }
        }
        return true;
    }
    public void FillArea(Node node, int sizeX, int sizeY)
    {
        for (int i = 0; i < sizeX; i++)
        {
            for (int j = 0; j < sizeY; j++)
            {

                grid[node.gridX + i, node.gridY - j].walkable = false;
                
            }
        }
    }
    public Node FindSpawnPoint(Vector2 pos,int sizeX,int sizeY)
    {
        Node node = NodeFromWorldPoint(pos + Vector2.left * 0.32f * (sizeX - 1) / 2 + Vector2.up * 0.32f * (sizeY - 1) / 2);
        int x = node.gridX - 1;
        int y = node.gridY + 1;
        for(int i = 0; i < sizeX + 2; i++)
        {
            if (!(x + i >= 0 && x + i < gridSizeX && y - i >= 0 && y - i < gridSizeY && x >= 0 && x < gridSizeX && y >= 0 && y < gridSizeY))
            {
                continue;
            }

                if (grid[x + i, y].walkable == true)
            {
                return grid[x + i, y];
            }
            if (grid[x , y-i].walkable == true)
            {
                return grid[x, y-i];
            }
        }

        x = x+(sizeX + 1);
        y -= (sizeY + 1);
        for (int i = 0; i < sizeX + 2; i++)
        {
            if (!(x - i >= 0 && x - i < gridSizeX && y + i >= 0 && y + i < gridSizeY && x >= 0 && x < gridSizeX && y >= 0 && y < gridSizeY))
            {
                continue;
            }
            if (grid[x - i, y].walkable == true)
            {
                return grid[x - i, y];
            }
            if (grid[x , y+i].walkable == true)
            {
                return grid[x, y +i];
            }
        }

        return null;
    }
    public Vector2 FindNearestWalkablePoint(Vector2 pos)
    {
        Node node = NodeFromWorldPoint(pos);

        if (node.walkable)
        {
            return node.worldPosition;
        }
        int sizeX = 0;
        int sizeY = 0;
        int x;
        int y;
        while (true)
        {
            if (sizeX>10)
            {
                break;
            }
            sizeX += 1;
            sizeY += 1;
            x = node.gridX - sizeX;
            y = node.gridY + sizeY;
           
            for (int i = 0; i < (sizeX*2) + 1; i++)
            {
                if (x + i >= 0 && x + i < gridSizeX && y >= 0 && y < gridSizeY)
                {
                    if (grid[x + i, y].walkable == true && grid[x + i, y].isTarget == false)
                    {
                        return grid[x + i, y].worldPosition;

                    }

                }
                if(y - i >= 0 && y - i < gridSizeY && x >= 0 && x < gridSizeX) { 
                    if (grid[x, y - i].walkable == true && grid[x, y - i].isTarget == false)
                    {
                        return grid[x, y - i].worldPosition;

                    }
                }

                
            }

            x = node.gridX + sizeX;
            y = node.gridY - sizeY;
           
            for (int i = 0; i < (sizeX * 2) + 1; i++)
            {
                if (x - i >= 0 && x - i < gridSizeX && y >= 0 && y < gridSizeY)
                {
                    if (grid[x - i, y].walkable == true && grid[x - i, y].isTarget == false)
                    {
                        return grid[x - i, y].worldPosition;
                    }
                }
                if(y + i >= 0 && y + i < gridSizeY && x >= 0 && x < gridSizeX) { 
                    if (grid[x, y + i].walkable == true && grid[x, y + i].isTarget == false)
                    {
                        return grid[x, y + i].worldPosition;
                    }
                }
               
            }
        }
        return pos;



    }
    public Node NodeFromWorldPoint(Vector2 worldPosition)
    {

        float percentX = (worldPosition.x + gridWorldSize.x / 2) / gridWorldSize.x;
        float percentY = (worldPosition.y + gridWorldSize.y / 2) / gridWorldSize.y;
        percentX = Mathf.Clamp01(percentX);
        percentY = Mathf.Clamp01(percentY);
        int x = Mathf.RoundToInt((gridSizeX - 1) * percentX);
        int y = Mathf.RoundToInt((gridSizeY - 1) * percentY);
        
        return grid[x,y];
    }
    public void UpdateNode(Node node, bool _walkable,bool _istarget)
    {
        grid[node.gridX, node.gridY].walkable = _walkable;
        grid[node.gridX, node.gridY].isTarget = _istarget;
    }


    
    public void UpdateGrid()
    {
        if (grid != null)
        {


            foreach (Node n in grid)
            {


                bool walkable = !(Physics2D.OverlapCircle(n.worldPosition, nodeRadius - 0.02f, unwalkableMask)) && !(n.isTarget);

                n.walkable = walkable;
              


            }
        }
    }
}
