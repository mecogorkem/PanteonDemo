using UnityEngine;

public interface IEnterEffect
{
    void OnEnterEffect(GameObject character);
}

public interface IStayEffect
{
    void OnStayEffect(GameObject character);
}

public interface IExitEffect
{
    void OnExitEffect(GameObject character);
}