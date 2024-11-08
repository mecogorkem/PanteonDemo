using UnityEngine;

public class FinishLine : MonoBehaviour
{
	private void OnTriggerEnter(Collider other)
	{
		if (other.CompareTag("Player"))
		{
			GameManager.Instance.FinishLine();
		}
		if (other.CompareTag("Bot"))
		{
			Object.Destroy(other.gameObject);
		}
	}
}
