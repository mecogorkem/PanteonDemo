using UnityEngine;
public interface IPushable
{
    void Push(Vector3 direction, float force);
    void PushNoSound(Vector3 direction, float force);
}
