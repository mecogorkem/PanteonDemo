using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Production : MonoBehaviour
{
    Product product;
    GameObject timer;
    GameObject canvas;
    Building building;
    float productionTime;


    private void Start()
    {
        product = GetComponent<Product>();
        building = GetComponent<Building>();
        productionTime = 0;

        timer = Instantiate(Resources.Load<GameObject>("UI/Timer"), Camera.main.WorldToScreenPoint(transform.position), Quaternion.identity);
        canvas = GameObject.FindGameObjectWithTag("canvas");
        timer.transform.SetParent(canvas.transform, false);
        timer.transform.localScale = new Vector2(building.sizeX, building.sizeY);
        timer.GetComponent<RectTransform>().position = Camera.main.WorldToScreenPoint(this.transform.position);
        timer.transform.GetChild(0).GetComponent<Image>().fillAmount = 0;


    }

    private void FixedUpdate()
    {
        timer.GetComponent<RectTransform>().position = Camera.main.WorldToScreenPoint(this.transform.position);

        if (productionTime >= 1)
        {
            product.FindNearestPoint();
            if (product.spawnPoint == null)
            {
                return;
            }
            product.productNum -= 1;
            GameObject child = Instantiate(Resources.Load<GameObject>("Unit/"+product.productName), product.spawnPoint.worldPosition,Quaternion.identity);
            child.GetComponent<Unit>().Move(product.targetPoint.worldPosition);

            
            productionTime = 0;

        }
        productionTime += Time.deltaTime / product.productTime;
        timer.transform.GetChild(0).GetComponent<Image>().fillAmount = productionTime;
        if (product.productNum <= 0)
        {
            product.productNum = 0;
            Destroy(timer);
            Destroy(GetComponent<Production>());
        }
    }

    


}
