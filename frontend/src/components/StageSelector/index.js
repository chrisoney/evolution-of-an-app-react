import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from '../../store/ui';
import styles from './stageSelector.module.css';
import './StageContainer.css'

function SignupFormPage() {
  const stageSelectorEle = useRef(null)
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
    // const grandparent = document.querySelector('#box')
    // const newTop = `calc(${e.clientY}px)`;
    // grandparent.style.top = newTop;
    document.querySelectorAll('.box').forEach(ele => ele.style.visibility = 'hidden')
    document.querySelector('#root').style.overflow = 'scroll';
  }

  const handleDrag = (e) => {
    stageSelectorEle.current.style.visibility = 'hidden';
    document.querySelectorAll('.box').forEach(ele => ele.style.visibility = 'visible')
    document.querySelector('#root').style.overflow = 'hidden';
  }

  const handleDragOver = (e, newDir) => {
    e.preventDefault()
    if (!e.currentTarget.classList.contains(styles.active)) {
      e.currentTarget.classList.add(styles.active)
    }
    stageSelectorEle.current.classList.remove('top', 'bottom', 'right', 'left')
    stageSelectorEle.current.classList.add(newDir) 
  }

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove(styles.active)
  }

  const handleDrop = (e) => {
    stageSelectorEle.current.style.visibility = 'visible';
  }

  return (
    <>
      {['top', 'bottom', 'left', 'right'].map((dir,idx) => {
        return (
          <div
            className={`${styles[dir + '_box']} box`}
            onDragEnter={(e) => e.preventDefault()}
            onDragOver={(e) => handleDragOver(e, dir)}
            onDragLeave={handleDragLeave}
            // onDrop={(e) => handleDrop(e)}
            onDropCapture={handleDrop}
            key={`selector-box-${idx}`}
          >
            <div className={`${styles[dir]}`} />
          </div>
        )
      })}
      <div
        id="box"
        className='stage-button-container left'
        ref={stageSelectorEle}
        onAnimationIteration={(e) => { e.target.style.animationPlayState = 'paused'}}
      >
        <div className={styles.stage_button_reveal}>
          <i
            className={`fas fa-bars ${styles.burger}`}
            onClick={handleBurgerClick}
            onDrag={handleDrag}
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