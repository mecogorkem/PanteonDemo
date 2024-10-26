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
    }

    protected virtual void OnTriggerEnter(Collider other)
    {
        Debug.Log("OnTriggerEnter");
        _enterEffect?.OnEnterEffect(other.gameObject);
    }

    protected virtual void OnTriggerStay(Collider other)
    {
        Debug.Log("OnTriggerStay");
        _stayEffect?.OnStayEffect(other.gameObject);
    }

    protected virtual void OnTriggerExit(Collider other)
    {
        Debug.Log("OnTriggerExit");
        _exitEffect?.OnExitEffect(other.gameObject);
    }
}