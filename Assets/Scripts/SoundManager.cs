using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    [SerializeField] private AudioClip pushSound;
    [SerializeField] private AudioClip coinSound;
    [SerializeField] private AudioClip countdownSound;
    public static SoundManager Instance { get; private set; }
    
    private AudioSource audioSource;
    
    private void Awake()
    {
        Instance = this;
        audioSource = GetComponent<AudioSource>();
    }
    
    
    
    public void PlaySoundEffect(Transform position, AudioClip clip)
    {
        AudioSource.PlayClipAtPoint(clip, position.position);
    }
    
    public void PlayPushSound(Transform position)
    {
        PlaySoundEffect(position, pushSound);
    }
    
    
    public void PlayCoinSound()
    {
        audioSource.PlayOneShot(coinSound);
    }
    
    public void PlayCountdownSound()
    {
        audioSource.PlayOneShot(countdownSound);
    }
    
}
