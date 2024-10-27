using Unity.AI.Navigation;
using UnityEngine;
using UnityEngine.AI;

public class NavMeshUpdater : MonoBehaviour
{
    public NavMeshSurface navMeshSurface;
    public float updateInterval = 1.0f; // Time interval in seconds between each update

    private float timer;

    void Start()
    {
        if (navMeshSurface == null)
        {
            navMeshSurface = GetComponent<NavMeshSurface>();
        }

        if (navMeshSurface == null)
        {
            Debug.LogError("NavMeshSurface component not assigned or found.");
        }
        else
        {
            UpdateNavMesh();
        }
    }

    void Update()
    {
        
            UpdateNavMesh();
         
    }

    void UpdateNavMesh()
    {
        navMeshSurface.BuildNavMesh();
    }
}