using System;
using UnityEngine;

public class NodeManager : MonoBehaviour
{
	private AINode[] nodes;

	private Vector3 mainPos;

	private Vector3 leftPos;

	private Vector3 rightPos;

	private float distToMain;

	private float distToLeft;

	private float distToRight;

	private float minDist;

	public static NodeManager Instance { get; private set; }

	private void Awake()
	{
		Instance = this;
		nodes = new AINode[base.gameObject.transform.childCount];
		for (int i = 0; i < nodes.Length; i++)
		{
			nodes[i] = base.gameObject.transform.GetChild(i).GetComponent<AINode>();
		}
		Array.Sort(nodes, (AINode x, AINode y) => x.transform.position.z.CompareTo(y.transform.position.z));
		SortNodesByZAxis();
	}

	private void SortNodesByZAxis()
	{
		for (int i = 0; i < nodes.Length; i++)
		{
			nodes[i].nextNode = ((i < nodes.Length - 1) ? nodes[i + 1] : null);
		}
	}

	public AINode GetFirstNode()
	{
		return (nodes.Length != 0) ? nodes[0] : null;
	}
}
