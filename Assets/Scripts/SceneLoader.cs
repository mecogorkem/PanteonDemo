using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SceneLoader : MonoBehaviour
{
    public void LoadScene(int index)
    {
        // Load the scene with the given name
        UnityEngine.SceneManagement.SceneManager.LoadScene(index);
    }
}
