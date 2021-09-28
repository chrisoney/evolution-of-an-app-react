import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from '../../store/ui';
import styles from './stageSelector.module.css';
import './StageContainer.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const currentStage = useSelector((state) => state.ui.stage);

  const handleStageSelect = (e) => {
    if (e.target.value === currentStage) return;
    dispatch(setStage(parseInt(e.target.value, 10)))
  }

  const handleBurgerClick = (e) => {
    document.getElementById("box").style.animationPlayState = 'running';
  }

  const handleBurgerDragEnd = (e) => {
    const grandparent = document.querySelector('#box')
    const newTop = `calc(${e.clientY}px)`;
    grandparent.style.top = newTop;
  }

  return (
    <>
      <div className={styles.top_box}><div className={`fas fa-bars ${styles['top']}`} /></div>
      <div className={styles.bottom_box}><div className={`fas fa-bars ${styles['bottom']}`} /></div>
      <div className={styles.left_box}><div className={`fas fa-bars ${styles['left']}`} /></div>
      <div className={styles.right_box}><div className={`fas fa-bars ${styles['right']}`} /></div>
      <div
        id="box"
        className='stage-button-container'
        onAnimationIteration={(e) => { e.target.style.animationPlayState = 'paused'}}
      >
        <div className={styles.stage_button_reveal}>
          <i
            className={`fas fa-bars ${styles.burger}`}
            onClick={handleBurgerClick}
            onDragEnd={handleBurgerDragEnd}
            draggable={true}
            title='Switch version'
          />
          <div className={styles.buttons}>
            <button
              className={styles.switch_stage}
              value={0}
              onClick={handleStageSelect}
            >
              Project Starter
            </button>
            <button
              className={styles.switch_stage}
              value={1}
              onClick={handleStageSelect}
            >
              Auth Refactor
            </button>
            <button
              className={styles.switch_stage}
              value={2}
              onClick={handleStageSelect}
            >
              Bookshelves
            </button>
            <button
              className={styles.switch_stage}
              value={3}
              onClick={handleStageSelect}
            >
              Stories
            </button>
            <button
              className={styles.switch_stage}
              value={4}
              onClick={handleStageSelect}
            >
              Reviews
            </button>
            <button
              className={styles.switch_stage}
              value={5}
              onClick={handleStageSelect}
            >
              Tags (Bonus)
            </button>
            <button
              className={styles.switch_stage}
              value={6}
              onClick={handleStageSelect}
            >
              Search (Bonus)
            </button>
          </div>
        </div>
      </div>
    </>
  )

}

export default SignupFormPage;