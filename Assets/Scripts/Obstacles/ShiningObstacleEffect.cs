using UnityEngine;

public class ShiningObstacleEffect : ObstacleBase, IEnterEffect
{
    [SerializeField] private float pushForce = 5f;
    [SerializeField] private ParticleSystem shineParticle;

    protected override void Awake()
    {
        base.Awake();
        if (shineParticle != null)
        {
            var main = shineParticle.main;
            main.startColor = ColorGenerator.GenerateRandomVibrantColor();
        }
        
    }

    public void OnEnterEffect(GameObject character)
    {
        IPushable pushable = character.GetComponent<IPushable>();
        if (pushable != null)
        {
            // Çarpışma yönünü hesapla ve geri fırlatma yönünü belirle
            Vector3 collisionDirection = (character.transform.position - this.transform.position).normalized;
            Vector3 pushDirection = collisionDirection; // Yönü tersine çeviriyoruz
            pushDirection.y = 0; // Y ekseninde itme yapmamalı
            pushDirection = pushDirection.normalized;
            pushable.Push(pushDirection, pushForce);
            
            // Parıltı efektini oynat
            if (shineParticle != null)
            {
                var main = shineParticle.main;
                main.startColor = ColorGenerator.GenerateRandomVibrantColor();
            }
        }
    }
}