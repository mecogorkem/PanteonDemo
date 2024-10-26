using UnityEngine;
using UnityEngine.SceneManagement;


[RequireComponent(typeof(CharacterController))]
public class PlayerController : MonoBehaviour, IMovable, IPushable,IDeathHandler
{
    [SerializeField] private float forwardSpeed = 5f;
    [SerializeField] private float horizontalSpeed = 2f;
    [SerializeField] private float gravity = 9.8f;
    [SerializeField] private float pushDecayRate = 5f; // İtme kuvvetinin azalma hızı
    [SerializeField] private float fallThreshold = -10f; // Aşağı düşme eşiği

    private CharacterController characterController;
    private Vector3 moveDirection = Vector3.zero;
    private Vector3 pushVelocity = Vector3.zero; // İtme kuvveti vektörü

    private void Awake()
    {
        characterController = GetComponent<CharacterController>();
    }

    private void Update()
    {
        HandleMovement();
        ApplyGravity();
        ApplyPush();
        Move();
        
        CheckFallBelowThreshold();

    }

    private void HandleMovement()
    {
        // Sürekli ileri hareket
        float horizontalInput = Input.GetAxis("Horizontal");

        // Yatay ve ileri hareketi ayarlar
        moveDirection.x = horizontalInput * horizontalSpeed;
        moveDirection.z = forwardSpeed;
        // moveDirection.y değerine dokunmuyoruz
    }

    private void ApplyGravity()
    {
        if (!characterController.isGrounded)
        {
            moveDirection.y -= gravity * Time.deltaTime;
        }
        else
        {
            moveDirection.y = -1f; // Yere daha iyi yapışması için küçük bir negatif değer veriyoruz
        }
    }

    private void ApplyPush()
    {
        // İtme kuvvetini hareket yönüne ekler
        moveDirection += pushVelocity;

        // İtme kuvvetini zamanla azaltır
        if (pushVelocity.magnitude > 0.1f)
        {
            pushVelocity = Vector3.Lerp(pushVelocity, Vector3.zero, pushDecayRate * Time.deltaTime);
        }
        else
        {
            pushVelocity = Vector3.zero;
        }
    }

    public void Move()
    {
        characterController.Move(moveDirection * Time.deltaTime);
    }

    public void Move(Vector3 direction)
    {
        // Harici hareket için
        moveDirection += direction;
    }

    public void Push(Vector3 direction, float force)
    {
        // İtme kuvvetini uygular
        pushVelocity = direction * force;
    }
    private void CheckFallBelowThreshold()
    {
        if (transform.position.y < fallThreshold)
        {
            Die();
        }
    }
    public void Die()
    {
        // Karakteri başlangıç noktasına resetleyebilir veya sahneyi yeniden yükleyebilirsiniz
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
}


