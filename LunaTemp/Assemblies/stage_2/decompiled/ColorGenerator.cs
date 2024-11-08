using System;
using UnityEngine;

public class ColorGenerator
{
	private static readonly System.Random random = new System.Random();

	public static ParticleSystem.MinMaxGradient GenerateRandomVibrantColor()
	{
		int r = 0;
		int g = 0;
		int b = 0;
		switch (random.Next(3))
		{
		case 0:
			r = 255;
			break;
		case 1:
			g = 255;
			break;
		default:
			b = 255;
			break;
		}
		if (r == 255)
		{
			if (random.Next(2) == 0)
			{
				g = random.Next(256);
				b = 0;
			}
			else
			{
				b = random.Next(256);
				g = 0;
			}
		}
		else if (g == 255)
		{
			if (random.Next(2) == 0)
			{
				r = random.Next(256);
				b = 0;
			}
			else
			{
				b = random.Next(256);
				r = 0;
			}
		}
		else if (random.Next(2) == 0)
		{
			r = random.Next(256);
			g = 0;
		}
		else
		{
			g = random.Next(256);
			r = 0;
		}
		return new ParticleSystem.MinMaxGradient(new Color((float)r / 255f, (float)g / 255f, (float)b / 255f));
	}
}
