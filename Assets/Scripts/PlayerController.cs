using DG.Tweening;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerController : CharacterBaseController
{
    
    [SerializeField] private Transform playerEndTransform;
    [SerializeField] private Transform playerGameCompleteTransform;
    
    private Joystick joystick;
    private Vector2 joystickInput;
    
    protected override void Start()
    {
        base.Start();
        joystick = Joystick.Instance;
        GameManager.Instance.onRunnerGameEnd += MoveToFinishTarget;
        GameManager.Instance.onGameComplete += MoveToGameCompleteTarget;
    }

    private void MoveToGameCompleteTarget()
    {
        if (_hasAnimator)
        {
            _animator.SetFloat(_animIDSpeed, 1);
            _animator.SetFloat(_animIDMotionSpeed, 0.5f);
        }
        float duration = 0.5f;
        Vector3 finishPosition = playerGameCompleteTransform.position;
        var finishRotation = playerGameCompleteTransform.rotation;
        transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine).onComplete+=(() =>
        {
            transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine).onComplete += (() =>
            {
                if (_hasAnimator)
                {
                    _animator.SetFloat(_animIDSpeed, 0);
                    _animator.SetFloat(_animIDMotionSpeed, 0.5f);
                    _animator.SetBool(_animIEnd, true);
                    GameManager.Instance.OpenCompleteGameUI();
                }
            });
        });
        moveDirection = Vector3.zero;
    }

    private void MoveToFinishTarget()
    {
        float duration = 0.5f;
        Vector3 finishPosition = playerEndTransform.position;
        var finishRotation = playerEndTransform.rotation;
        transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine);
        transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine).onComplete+=(() =>
        {
            if (_hasAnimator)
            {
                _animator.SetFloat(_animIDSpeed, 0);
                _animator.SetFloat(_animIDMotionSpeed, 0.5f);
            }
        });
        moveDirection = Vector3.zero;
        
    }

    protected override void GatherInput()
    {
        joystickInput = joystick.GetInputVector(); // Get input from the joystick

        if (joystickInput != Vector2.zero)
        {
            // Use joystick input if available
            moveDirection.x = joystickInput.x;
            moveDirection.z = joystickInput.y;
        }
        else
        {
            // Fallback to keyboard input if no joystick input is detected
            moveDirection.x = Input.GetAxis("Horizontal");
            moveDirection.z = Input.GetAxis("Vertical");
        }
    }


    public override void Die()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);

    }
}