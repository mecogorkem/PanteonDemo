using UnityEngine;

[RequireComponent(typeof(ObstacleBase))]
public class DeathObstacleEffect : ObstacleBase, IEnterEffect
{
    public void OnEnterEffect(GameObject character)
    {
        IDeathHandler deathHandler = character.GetComponent<IDeathHandler>();
        if (deathHandler != null)
        {

            deathHandler.Die();
        }
    }
}