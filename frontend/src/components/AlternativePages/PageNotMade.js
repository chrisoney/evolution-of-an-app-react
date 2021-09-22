import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from './pageNotMade.module.css';

function PageNotMade({location}) {
  const stage = useSelector(state => state.ui.stage)
  const referrer = location.state.referrer;
  const requiredStage = location.state.requiredStage;
  if (stage >= requiredStage) return <Redirect to={referrer} />

  return (
    <div className={styles.background_container}>
      <div className={styles.info_container}>
        <div className={styles.top_section}>
          <div className={styles.pnf_title}>This page hadn't been made at this point.</div>
          <div className={styles.pnf_description}>Which means that it's part of a later iteration of this app. Please choose a later mode to see if it includes this page.</div>
        </div>
        <div className={styles.mid_section}>
          <div className={styles.pnf_mode_description}>As a reminder, you can click the sandwich button the left hand side of the page to reveal the different iterations of this app. If you navigated to this page and switched the mode, you can select a later mode than than the current one to find when this page was incorporated. You can also drag the button up and down to move it out of the way if it overlaps with a feature.</div>
        </div>
      </div>
    </div>
  )
}

export default PageNotMade;