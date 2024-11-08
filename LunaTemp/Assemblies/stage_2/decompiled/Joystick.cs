using UnityEngine;
using UnityEngine.EventSystems;

public class Joystick : MonoBehaviour, IDragHandler, IEventSystemHandler, IPointerDownHandler, IPointerUpHandler
{
	[SerializeField]
	private RectTransform joystickBackground;

	[SerializeField]
	private RectTransform joystickHandle;

	private Vector2 inputVector;

	private Vector2 joystickCenter;

	public static Joystick Instance { get; private set; }

	private void Awake()
	{
		Instance = this;
	}

	private void Start()
	{
		joystickBackground.gameObject.SetActive(false);
	}

	public void OnPointerDown(PointerEventData eventData)
	{
		joystickBackground.position = eventData.position;
		joystickCenter = eventData.position;
		joystickBackground.gameObject.SetActive(true);
		OnDrag(eventData);
	}

	public void OnDrag(PointerEventData eventData)
	{
		Vector2 direction = eventData.position - joystickCenter;
		float radius = joystickBackground.sizeDelta.x / 2f;
		inputVector = ((direction.magnitude > radius) ? direction.normalized : (direction / radius));
		joystickHandle.anchoredPosition = inputVector * radius;
	}

	public void OnPointerUp(PointerEventData eventData)
	{
		inputVector = Vector2.zero;
		joystickHandle.anchoredPosition = Vector2.zero;
		joystickBackground.gameObject.SetActive(false);
	}

	public Vector2 GetInputVector()
	{
		return inputVector;
	}
}
