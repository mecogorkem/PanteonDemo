using UnityEngine;

[RequireComponent(typeof(ObstacleBase))]
public class DeathObstacleEffect : ObstacleBase, IEnterEffect
{
	public void OnEnterEffect(GameObject character)
	{
		character.GetComponent<IDeathHandler>()?.Die();
	}
}
