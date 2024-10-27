using System;
using UnityEngine;
using UnityEngine.EventSystems;

public class Joystick : MonoBehaviour, IDragHandler, IPointerDownHandler, IPointerUpHandler
{
    [SerializeField] private RectTransform joystickBackground;
    [SerializeField] private RectTransform joystickHandle;

    private Vector2 inputVector;
    private Vector2 joystickCenter;

    public static Joystick Instance { get; private set; }

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        // Initially hide the joystick
        joystickBackground.gameObject.SetActive(false);
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        // Set joystick background position to the touch position and activate it
        joystickBackground.position = eventData.position;
        joystickCenter = eventData.position;
        joystickBackground.gameObject.SetActive(true);

        // Call OnDrag to handle any initial input at the pointer-down position
        OnDrag(eventData);
    }

    public void OnDrag(PointerEventData eventData)
    {
        // Calculate the direction relative to the joystick center
        Vector2 direction = eventData.position - joystickCenter;
        float radius = joystickBackground.sizeDelta.x / 2;
        inputVector = direction.magnitude > radius ? direction.normalized : direction / radius;

        // Move the joystick handle
        joystickHandle.anchoredPosition = inputVector * radius;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        // Reset input and hide joystick when touch is lifted
        inputVector = Vector2.zero;
        joystickHandle.anchoredPosition = Vector2.zero;
        joystickBackground.gameObject.SetActive(false);
    }

    public Vector2 GetInputVector()
    {
        return inputVector;
    }
}