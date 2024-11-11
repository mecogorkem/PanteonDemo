using UnityEngine;

public class AINode : MonoBehaviour
{
	public float leftOffset = 1f;

	public float rightOffset = 1f;

	public AINode nextNode;

	public Vector3 GetPosition()
	{
		return base.transform.position;
	}
}
