using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Product : MonoBehaviour
{
    public string productName;
    public float productTime;
    public Node targetPoint;
    public int productNum;
    public Node spawnPoint;
    public float productCost;


   

    public void StartProduction()
    {

        productNum += 1;
        if (GetComponent<Production>() == null)
        {
            this.gameObject.AddComponent<Production>();

        }

    }

    public void FindNearestPoint()
    {
        Building building = GetComponent<Building>();
        spawnPoint = GameObject.FindGameObjectWithTag("grid").GetComponent<Grid>().FindSpawnPoint(transform.position,building.sizeX,building.sizeY);
        if(targetPoint == null)
        {
            targetPoint = spawnPoint;
        }
    }
    public void SetTargetPoint(Vector2 target)
    {
        targetPoint = GameObject.FindGameObjectWithTag("grid").GetComponent<Grid>().NodeFromWorldPoint(target);

    }
}
