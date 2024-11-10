using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class BombPrefab : MonoBehaviour
{
    private bool isCollected = false;
    [SerializeField] private ParticleSystem explosionEffect;
        private void OnTriggerEnter(Collider other)
        {
            if (isCollected || !other.CompareTag("Bot")) return;
    
            isCollected = true;
            var character = other.GetComponent<CharacterBaseController>();
            character.Die();
            
            // Notify CoinManager of the coin collection and pass the coin's position
            explosionEffect.Play();
            transform.DOScale(0, 0.25f).OnComplete(() =>
            {
                Destroy(this.gameObject);
            });
        }
}
