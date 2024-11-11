using UnityEngine;
using UnityEngine.SceneManagement;

public class EscToMainMenu : MonoBehaviour
{
	private void Update()
	{
		if (Input.GetKeyDown(KeyCode.Escape))
		{
			SceneManager.LoadScene(0);
		}
	}
}
