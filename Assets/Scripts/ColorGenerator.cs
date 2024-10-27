using UnityEngine;
using Color = System.Drawing.Color;
using Random = System.Random;

public class ColorGenerator
{
    private static readonly Random random = new Random();

    public static ParticleSystem.MinMaxGradient GenerateRandomVibrantColor()
    {
        int r = 0, g = 0, b = 0;

        // R, G veya B bileşenlerinden birini 255 olarak rastgele seç
        int primaryIndex = random.Next(3);
        if (primaryIndex == 0) r = 255;
        else if (primaryIndex == 1) g = 255;
        else b = 255;

        // Diğer iki bileşenden rastgele birini seçip ona renk ataması yapalım, diğerine 0 verelim
        if (r == 255)
        {
            if (random.Next(2) == 0) // Rastgele seçim: g veya b
            {
                g = random.Next(256); // g'ye rastgele bir değer atanır
                b = 0;                // b sıfır olur
            }
            else
            {
                b = random.Next(256); // b'ye rastgele bir değer atanır
                g = 0;                // g sıfır olur
            }
        }
        else if (g == 255)
        {
            if (random.Next(2) == 0) // Rastgele seçim: r veya b
            {
                r = random.Next(256); // r'ye rastgele bir değer atanır
                b = 0;                // b sıfır olur
            }
            else
            {
                b = random.Next(256); // b'ye rastgele bir değer atanır
                r = 0;                // r sıfır olur
            }
        }
        else // b == 255
        {
            if (random.Next(2) == 0) // Rastgele seçim: r veya g
            {
                r = random.Next(256); // r'ye rastgele bir değer atanır
                g = 0;                // g sıfır olur
            }
            else
            {
                g = random.Next(256); // g'ye rastgele bir değer atanır
                r = 0;                // r sıfır olur
            }
        }

        return new ParticleSystem.MinMaxGradient(new UnityEngine.Color(r / 255f, g / 255f, b / 255f));
    }
}