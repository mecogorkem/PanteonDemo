using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerController : CharacterBaseController
{
	private Joystick joystick;

	private Vector2 joystickInput;

	protected void Start()
	{
		joystick = Joystick.Instance;
	}

	protected override void GatherInput()
	{
		joystickInput = joystick.GetInputVector();
		if (joystickInput != Vector2.zero)
		{
			moveDirection.x = joystickInput.x;
			moveDirection.z = joystickInput.y;
		}
		else
		{
			moveDirection.x = Input.GetAxis("Horizontal");
			moveDirection.z = Input.GetAxis("Vertical");
		}
	}

	public override void Die()
	{
		SceneManager.LoadScene(SceneManager.GetActiveScene().name);
	}
}
