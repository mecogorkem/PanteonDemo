using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Player : MonoBehaviour

{
    
    [SerializeField] private Transform playerEndTransform;
    [SerializeField] private Transform playerGameCompleteTransform;
    private CharacterBaseController _characterBaseController;
  
    
    protected void Start()
    {
        GameManager.Instance.onRunnerGameEnd += MoveToFinishTarget;
        GameManager.Instance.onGameComplete += MoveToGameCompleteTarget;
        _characterBaseController = GetComponent<CharacterBaseController>();
        _characterBaseController.OnDeath = Die;
    }

    private void MoveToGameCompleteTarget()
    {
        if (_characterBaseController._hasAnimator)
        {
            _characterBaseController._animator.SetFloat(_characterBaseController._animIDSpeed, 1);
            _characterBaseController._animator.SetFloat(_characterBaseController._animIDMotionSpeed, 0.5f);
        }
        float duration = 0.5f;
        Vector3 finishPosition = playerGameCompleteTransform.position;
        var finishRotation = playerGameCompleteTransform.rotation;
        transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine).onComplete+=(() =>
        {
            transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine).onComplete += (() =>
            {
                if (_characterBaseController._hasAnimator)
                {
                    _characterBaseController._animator.SetFloat(_characterBaseController._animIDSpeed, 0);
                    _characterBaseController._animator.SetFloat(_characterBaseController._animIDMotionSpeed, 0.5f);
                    _characterBaseController._animator.SetBool(_characterBaseController._animIEnd, true);
                    GameManager.Instance.OpenCompleteGameUI();
                }
            });
        });
        _characterBaseController.moveDirection = Vector3.zero;
    }

    private void MoveToFinishTarget()
    {
        float duration = 0.5f;
        Vector3 finishPosition = playerEndTransform.position;
        var finishRotation = playerEndTransform.rotation;
        transform.DORotate(finishRotation.eulerAngles, duration).SetEase(Ease.InOutSine);
        transform.DOMove(finishPosition, duration).SetEase(Ease.InOutSine).onComplete+=(() =>
        {
            if (_characterBaseController._hasAnimator)
            {
                _characterBaseController._animator.SetFloat(_characterBaseController._animIDSpeed, 0);
                _characterBaseController._animator.SetFloat(_characterBaseController._animIDMotionSpeed, 0.5f);
            }
        });
        _characterBaseController.moveDirection = Vector3.zero;
        
    }




    public void Die()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);

    }
}