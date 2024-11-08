using TMPro;
using UnityEngine;

public class DeathCounter : MonoBehaviour
{
	private static int deathCounter = -1;

	[SerializeField]
	private TextMeshProUGUI deathCounterText;

	private void Start()
	{
		deathCounter++;
		deathCounterText.text = deathCounter.ToString();
	}

	public static void ResetDeathCounter()
	{
		deathCounter = -1;
	}
}
