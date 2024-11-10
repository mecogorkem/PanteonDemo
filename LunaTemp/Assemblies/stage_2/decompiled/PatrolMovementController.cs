using UnityEngine;

public class PatrolMovementController : MonoBehaviour
{
	[SerializeField]
	private Vector3 movementSpeed = new Vector3(1f, 0f, 0f);

	[SerializeField]
	private float minX = -5f;

	[SerializeField]
	private float maxX = 5f;

	private Vector3 deltaMovement;

	private void Update()
	{
		Move();
	}

	private void Move()
	{
		deltaMovement = movementSpeed * Time.deltaTime;
		base.transform.position += deltaMovement;
		if (base.transform.position.x < minX)
		{
			movementSpeed.x = Mathf.Abs(movementSpeed.x);
		}
		else if (base.transform.position.x > maxX)
		{
			movementSpeed.x = 0f - Mathf.Abs(movementSpeed.x);
		}
	}
}
