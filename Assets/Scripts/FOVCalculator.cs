using UnityEngine;

public class FOVCalculator : MonoBehaviour
{
    void Start()
    {
        float referenceWidth = 1440f;
        float referenceHeight = 2560f;
        float targetWidth = Screen.width;
        float targetHeight = Screen.height;
        float referenceFOV = 90f; // Referans dikey FOV olarak ayarlanır.

        float targetFOV = CalculateVerticalFOV(referenceWidth, referenceHeight, targetWidth, targetHeight, referenceFOV);
        var camera = Camera.main;
        if (camera != null)
        {
            camera.fieldOfView = targetFOV;
        }
    }

    public float CalculateVerticalFOV(float referenceWidth, float referenceHeight, float targetWidth, float targetHeight, float referenceFOV)
    {
        // Referans ve hedef çözünürlüklerin en-boy oranlarını hesapla
        float referenceAspectRatio = referenceWidth / referenceHeight;
        float targetAspectRatio = targetWidth / targetHeight;

        // Referans dikey FOV'u radyana çevir
        float referenceVerticalFOVRadians = referenceFOV * Mathf.Deg2Rad;

        // Yatay FOV hesapla ve bu değeri yeni hedef dikey FOV’a göre ayarla
        float referenceHorizontalFOVRadians = 2 * Mathf.Atan(Mathf.Tan(referenceVerticalFOVRadians / 2) * referenceAspectRatio);
        float targetVerticalFOV = 2 * Mathf.Atan(Mathf.Tan(referenceHorizontalFOVRadians / 2) / targetAspectRatio);

        // Hedef dikey görüş açısını dereceye çevir
        return targetVerticalFOV * Mathf.Rad2Deg;
    }
}
