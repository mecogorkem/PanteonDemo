using UnityEngine;

public abstract class ObstacleBase : MonoBehaviour
{
    private IEnterEffect _enterEffect;
    private IStayEffect _stayEffect;
    private IExitEffect _exitEffect;

    protected virtual void Awake()
    {
        _enterEffect = GetComponent<IEnterEffect>();
        _stayEffect = GetComponent<IStayEffect>();
        _exitEffect = GetComponent<IExitEffect>();
        this.gameObject.tag = "Obstacle";
    }

    private bool IsPlayerOrBot(Collider other)
    {
        return other.CompareTag("Player") || other.CompareTag("Bot");
    }

    protected virtual void OnTriggerEnter(Collider other)
    {
        if (_enterEffect == null || !IsPlayerOrBot(other)) return;
        _enterEffect.OnEnterEffect(other.gameObject);
    }

    protected virtual void OnTriggerStay(Collider other)
    {
        if (_stayEffect == null || !IsPlayerOrBot(other)) return;
        _stayEffect.OnStayEffect(other.gameObject);
    }

    protected virtual void OnTriggerExit(Collider other)
    {
        if (_exitEffect == null || !IsPlayerOrBot(other)) return;
        _exitEffect.OnExitEffect(other.gameObject);
    }
}