using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class BuildingSystem : MonoBehaviour
{
    public GameObject selectedObject;
    public Grid grid;
    public ShowInformation information;
    int sizeX, sizeY;
    float   gridSize;
    public GameObject buildings;
    string buildname;
    GameObject prefab;

    private void Start()
    {
        gridSize = 0.32f;
        selectedObject = null;
        information.Clear();
    }




    private void FixedUpdate()
    {
        if ((Input.GetKeyDown(KeyCode.Escape) || Input.GetMouseButtonDown(1)))
        {


            if (selectedObject)
            {
                Destroy(selectedObject);

            }

            selectedObject = null;
            information.Clear();
        }
        if (selectedObject != null)
        {
            Node a = grid.NodeFromWorldPoint((Vector2)Camera.main.ScreenToWorldPoint(Input.mousePosition) );
            selectedObject.transform.position = a.worldPosition +Vector2.right*gridSize*(sizeX-1)/2 + Vector2.down * gridSize * (sizeY - 1) / 2;
            //if( a.gridY < sizeY-1)
            //{
            //    selectedObject.GetComponent<SpriteRenderer>().color = Color.red;

            //}
             if (grid.CheckWalkableArea(a, sizeX, sizeY))
            {
                selectedObject.GetComponent<SpriteRenderer>().color = Color.grey;
                if ((Input.GetMouseButtonDown(0) || Input.GetMouseButton(0)) && !EventSystem.current.IsPointerOverGameObject())
                {

                    selectedObject.layer = 8;

                    selectedObject.GetComponent<Building>().Costruction();
                    selectedObject.transform.parent = buildings.transform ;
                    selectedObject = null;
                    grid.FillArea(a, sizeX, sizeY);
                    SelectBuilding(buildname);
                }
            }
            else
            {
                selectedObject.GetComponent<SpriteRenderer>().color = Color.red;

            }
            
        }
       
    }



    public void SelectBuilding(string name)
    {
        if (selectedObject)
        {
            Destroy(selectedObject);

        }

        selectedObject = null;
        information.Clear();
        prefab = Resources.Load<GameObject>("Build/" + name);
        selectedObject = Instantiate(prefab, Vector3.zero,Quaternion.identity);
        sizeX = selectedObject.GetComponent<Building>().sizeX;
        sizeY = selectedObject.GetComponent<Building>().sizeY;
        selectedObject.GetComponent<Building>().isActive = false;
        information.Show(selectedObject);
        buildname = name;
    }

}
