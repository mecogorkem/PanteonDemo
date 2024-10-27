using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerController : CharacterBaseController
{
    protected override void GatherInput()
    {
        // Gather input from Unity's Input Manager
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        moveDirection = new Vector3(horizontal, 0.0f, vertical);
    }

    public override void Die()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);

    }
}