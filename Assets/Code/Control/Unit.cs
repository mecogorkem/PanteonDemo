using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Unit : MonoBehaviour
{

	public Node targetNode;
	float speed = 1;
	Vector2[] path;
	int targetIndex;
	
	public void Move(Vector2 target)
    {
		Grid grid = GameObject.FindGameObjectWithTag("grid").GetComponent<Grid>();
        if (targetNode != null)
        {
			grid.UpdateNode(targetNode, true, false);
			
		}
		Vector2 pos = grid.FindNearestWalkablePoint(target);
		grid.UpdateNode(grid.NodeFromWorldPoint(pos), true, true);

		PathRequestManager.RequestPath(new PathRequest(transform.position, pos, OnPathFound));
		targetNode = grid.NodeFromWorldPoint(pos);
		grid.UpdateGrid();


	}




	//public void UpdateRoute()
	//   {
	//	Move(targetPos);
	//   }

	public void OnPathFound(Vector2[] newPath, bool pathSuccessful)
	{
		if (pathSuccessful)
		{
			path = newPath;
			targetIndex = 0;
			StopCoroutine("FollowPath");
			StartCoroutine("FollowPath");
		}
	}

	IEnumerator FollowPath()
	{
		Vector2 currentWaypoint = path[0];
		while (true)
		{
			if ((Vector2)transform.position == currentWaypoint)
			{
				targetIndex++;
				if (targetIndex >= path.Length)
				{
					yield break;
				}
				currentWaypoint = path[targetIndex];
			}

			transform.position = Vector2.MoveTowards(transform.position, currentWaypoint, speed * Time.deltaTime);
			yield return null;

		}
	}
	
	
}
