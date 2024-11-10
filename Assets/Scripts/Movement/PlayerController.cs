using DG.Tweening;
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
        joystickInput = joystick.GetInputVector(); // Get input from the joystick

        if (joystickInput != Vector2.zero)
        {
            // Use joystick input if available
            moveDirection.x = joystickInput.x;
            moveDirection.z = joystickInput.y;
        }
        else
        {
            // Fallback to keyboard input if no joystick input is detected
            moveDirection.x = Input.GetAxis("Horizontal");
            moveDirection.z = Input.GetAxis("Vertical");
        }
    }


    public override void Die()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);

    }
}