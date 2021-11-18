using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    public float speed = 5;
    public Vector3 worldSize = new Vector3(7,7,-10);
    // Start is called before the first frame update
    void Start()
    {

        transform.position = Vector3.Scale(worldSize, new Vector3(-1, -1, 1));
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.D) && transform.position.x<worldSize.x)
        {
            transform.Translate(new Vector3(speed * Time.deltaTime, 0, 0));
        }
        if (Input.GetKey(KeyCode.A) && transform.position.x > worldSize.x*-1)
        {
            transform.Translate(new Vector3(-speed * Time.deltaTime, 0, 0));
        }
        if (Input.GetKey(KeyCode.S) && transform.position.y > worldSize.y*-1)
        {
            transform.Translate(new Vector3(0, -speed * Time.deltaTime, 0));
        }
        if (Input.GetKey(KeyCode.W) && transform.position.y < worldSize.y)
        {
            transform.Translate(new Vector3(0, speed * Time.deltaTime, 0));
        }
    }
}
