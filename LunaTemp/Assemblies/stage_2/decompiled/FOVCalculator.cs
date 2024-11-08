using System;
using UnityEngine;

public class FOVCalculator : MonoBehaviour
{
	private void Start()
	{
		float referenceWidth = 1440f;
		float referenceHeight = 2560f;
		float targetWidth = Screen.width;
		float targetHeight = Screen.height;
		float referenceFOV = 90f;
		float targetFOV = CalculateVerticalFOV(referenceWidth, referenceHeight, targetWidth, targetHeight, referenceFOV);
		Camera camera = Camera.main;
		if (camera != null)
		{
			camera.fieldOfView = targetFOV;
		}
	}

	public float CalculateVerticalFOV(float referenceWidth, float referenceHeight, float targetWidth, float targetHeight, float referenceFOV)
	{
		float referenceAspectRatio = referenceWidth / referenceHeight;
		float targetAspectRatio = targetWidth / targetHeight;
		float referenceVerticalFOVRadians = referenceFOV * (3.14159265f / 180f);
		float referenceHorizontalFOVRadians = 2f * Mathf.Atan(Mathf.Tan(referenceVerticalFOVRadians / 2f) * referenceAspectRatio);
		float targetVerticalFOV = 2f * Mathf.Atan(Mathf.Tan(referenceHorizontalFOVRadians / 2f) / targetAspectRatio);
		return targetVerticalFOV * 57.29578f;
	}
}
