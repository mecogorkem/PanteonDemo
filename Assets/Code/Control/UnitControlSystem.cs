using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class UnitControlSystem : MonoBehaviour
{
    [SerializeField] private Transform selectionAreaTransform; 
    public ShowInformation information;
    List<GameObject> selectedUnit = new List<GameObject>();
    List<GameObject> selectedBarrack = new List<GameObject>();
    List<GameObject> selectedGameObject = new List<GameObject>();
    private Vector2 startPos;
    bool unitTypeFlag;
    
    string basetype;
    public BuildingSystem building;

    private void Awake()
    {
        selectionAreaTransform.gameObject.SetActive(false);
    }
    void Update()
    {

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            Clear();
        }
        if (Input.GetMouseButtonDown(0)&& !EventSystem.current.IsPointerOverGameObject() && !building.selectedObject)
        {
            selectionAreaTransform.gameObject.SetActive(true);

            startPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

            Clear();

        }
        if (Input.GetMouseButton(0) && !building.selectedObject)
        {
            Vector2 currentMousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Vector2 lowerLeft = new Vector2(
                Mathf.Min(startPos.x,currentMousePosition.x), 
                Mathf.Min(startPos.y, currentMousePosition.y)
            );
            Vector2 upperRight = new Vector2(
                Mathf.Max(startPos.x, currentMousePosition.x),
                Mathf.Max(startPos.y, currentMousePosition.y)
            );

            selectionAreaTransform.position = lowerLeft;
            selectionAreaTransform.localScale = 100*(upperRight - lowerLeft);
        }


        if (Input.GetMouseButtonUp(0) && !EventSystem.current.IsPointerOverGameObject() && !building.selectedObject)
        {
            selectionAreaTransform.gameObject.SetActive(false);
            
            Collider2D[] collider2DArray = Physics2D.OverlapAreaAll(startPos, Camera.main.ScreenToWorldPoint(Input.mousePosition));
            
            if (collider2DArray.Length == 0)
            {
                information.Clear();
                
            }
            unitTypeFlag = true;
            basetype = "";
            foreach(Collider2D collider2D in collider2DArray)
            {
                if (collider2D.gameObject.GetComponent<Building>() != null)
                {
                    if (basetype=="")
                    {
                        basetype = collider2D.GetComponent<Building>().buildName;
                    }
                    else
                    {
                        if(basetype != collider2D.GetComponent<Building>().buildName)
                        {
                            unitTypeFlag = false;
                        }
                    }
                }
                collider2D.gameObject.GetComponent<SpriteRenderer>().color = new Color(0.5f, 1, 0.5f);
                selectedGameObject.Add(collider2D.gameObject);
                if (collider2D.tag == "unit")
                {
                    selectedUnit.Add(collider2D.gameObject);
                }
                if (collider2D.tag == "barrack")
                {
                    selectedBarrack.Add(collider2D.gameObject);

                }
            }

            if ( selectedGameObject.Count>0 && unitTypeFlag && selectedGameObject[0].GetComponent<Building>())
            {
                foreach (GameObject i in selectedGameObject)
                {
                    if (i.GetComponent<Building>())
                    {
                        information.Show(i);

                    }
                }
            }
        }
        

        
        if (selectedBarrack != null && Input.GetMouseButtonDown(1))
        {
          
            information.Clear();
            foreach (GameObject gameObject in selectedBarrack)
            {
                gameObject.GetComponent<Product>().SetTargetPoint((Vector2)Camera.main.ScreenToWorldPoint(Input.mousePosition));
                information.Show(gameObject);
            }
        }
        if (selectedUnit != null && Input.GetMouseButtonDown(1))
        {
            foreach (GameObject gameObject in selectedUnit)
            {
                gameObject.GetComponent<Unit>().Move((Vector2)Camera.main.ScreenToWorldPoint(Input.mousePosition));

            }

        }
        

    }
    void Clear()
    {
        selectedBarrack.Clear();
        selectedUnit.Clear();
        information.Clear();
        foreach (GameObject a in selectedGameObject)
        {
            if (a )
            {
                a.GetComponent<SpriteRenderer>().color = new Color(1, 1, 1);

            }

        }
        selectedGameObject.Clear();
    }
}
