import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from '../../store/ui';
import styles from './stageSelector.module.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const currentStage = useSelector((state) => state.ui.stage);
  const [revealed, setRevealed] = useState(false);

  const handleStageSelect = (e) => {
    if (e.target.value === currentStage) return;
    dispatch(setStage(parseInt(e.target.value, 10)))
  }
  return (
    <>
      <div className={`${styles.stage_button_container} ${revealed ? styles.slide_out : styles.slide_in}`}>
        <div className={styles.stage_button_reveal}>
          <i
            className={`fas fa-bars ${styles.burger}`}
            onClick={() => setRevealed(!revealed)}
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