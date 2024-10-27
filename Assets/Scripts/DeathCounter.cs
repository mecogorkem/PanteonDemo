using TMPro;
using UnityEngine;

public class DeathCounter : MonoBehaviour
{
    private static int deathCounter = -1;
    [SerializeField] private TextMeshProUGUI deathCounterText;
    // Start is called before the first frame update
    void Start()
    {
        deathCounter++;
        deathCounterText.text = deathCounter.ToString();
    }

}