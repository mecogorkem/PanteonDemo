using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Building : MonoBehaviour
{
    public string buildName;

    public int sizeX, sizeY;
    private bool _isActive;
    public float constructionTime;
    public bool isActive
    {
        get
        {
            return _isActive;
        }
        set
        {
            gameObject.GetComponent<SpriteRenderer>().color = (value) ? Color.white : Color.grey;
            _isActive = value;
        }
    }

 
    public void Costruction()
    {
        this.gameObject.AddComponent<Construction>();
    }

    public void Demolish()
    {

        GameObject.Destroy(this.gameObject);
    }

    private void OnDestroy()
    {
    if (GameObject.FindGameObjectWithTag("grid"))
        {
            GameObject.FindGameObjectWithTag("grid").GetComponent<Grid>().UpdateGrid();

        }

    }


}
