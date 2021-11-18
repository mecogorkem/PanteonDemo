using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ShowInformation : MonoBehaviour
{
    List<GameObject> targets = new List<GameObject>();
    GameObject selectedtarget;
    public void Show(GameObject gameObject)
    {

        
        this.transform.GetChild(0).gameObject.SetActive(true);
        Building building = gameObject.GetComponent<Building>();
        this.transform.GetChild(0).GetComponent<Text>().text = building.buildName;
        this.transform.GetChild(0).GetChild(0).GetComponent<Image>().sprite = Resources.Load<Sprite>("Build/Image/"+building.buildName);
        this.transform.GetChild(0).GetChild(1).GetComponent<Button>().onClick.AddListener(() => { building.Demolish(); });

        Product product = gameObject.GetComponent<Product>();
        if (product == null)
        {
            return;
        }
        this.transform.GetChild(1).gameObject.SetActive(true);
        this.transform.GetChild(1).GetComponent<Text>().text = product.productName;
        
        this.transform.GetChild(1).GetChild(0).GetComponent<Image>().sprite = Resources.Load<Sprite>("Unit/Image/" + product.productName);
      

        if (building.isActive)
        {
            this.transform.GetChild(1).GetChild(1).gameObject.SetActive(true);

            this.transform.GetChild(1).GetChild(1).GetComponent<Button>().onClick.AddListener(() => { product.StartProduction(); });
            if(product.targetPoint == null)
            {
                product.FindNearestPoint();
            }
            if (product.targetPoint != null)
            {
                selectedtarget = Instantiate(Resources.Load<GameObject>("SelectedTile"), product.targetPoint.worldPosition, Quaternion.identity);

            }
            this.transform.GetChild(1).GetChild(1).GetChild(0).GetComponent<Text>().text = product.productCost.ToString();
            
         
            targets.Add(selectedtarget);
        }
        else
        {
            this.transform.GetChild(1).GetChild(1).gameObject.SetActive(false);

        }


    }

    public void Clear()
    {
        this.transform.GetChild(0).gameObject.SetActive(true);
        this.transform.GetChild(1).gameObject.SetActive(true);
        foreach (GameObject t in targets)
        {
            GameObject.Destroy(t);
        }
        this.transform.GetChild(0).GetChild(1).GetComponent<Button>().onClick.RemoveAllListeners();
        this.transform.GetChild(0).GetChild(1).GetComponent<Button>().onClick.AddListener(() => { Clear(); });

        this.transform.GetChild(1).GetChild(1).GetComponent<Button>().onClick.RemoveAllListeners();

        targets.Clear();
        this.transform.GetChild(0).gameObject.SetActive(false);
        this.transform.GetChild(1).gameObject.SetActive(false);

    }


}

