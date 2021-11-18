using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Construction : MonoBehaviour
{
    Building building;
    GameObject timer;
    float constructionTime;
    GameObject canvas;
    void Start()
    {
        building = GetComponent<Building>();
        constructionTime = 0;
        building.isActive = false;

        timer = Instantiate(Resources.Load<GameObject>("UI/Timer"), Camera.main.WorldToScreenPoint(transform.position), Quaternion.identity);
        canvas = GameObject.FindGameObjectWithTag("canvas");
        timer.transform.SetParent(canvas.transform, false);
        timer.transform.localScale = new Vector2(building.sizeX,building.sizeY);
        timer.GetComponent<RectTransform>().position = Camera.main.WorldToScreenPoint(this.transform.position );
        timer.transform.SetSiblingIndex(0);
        timer.transform.GetChild(0).GetComponent<Image>().fillAmount = 0 ;
      
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        constructionTime += Time.deltaTime/building.constructionTime;
        timer.GetComponent<RectTransform>().position = Camera.main.WorldToScreenPoint(this.transform.position);

        if (constructionTime >= 1)
        {
            building.isActive = true;

            Destroy(timer);
            Destroy(GetComponent<Construction>());
        }
        timer.transform.GetChild(0).GetComponent<Image>().fillAmount = constructionTime;

    }
}
