import React from 'react';

import styles from './modal.module.css';

const Instructions = () => {
  return (
    <div className={`${styles.info_container} ${styles.modal_version}`}>
      <div className={styles.top_section}>
        <div className={styles.pnf_title}>Welcome to RoyalReads!</div>
        <div className={styles.pnf_description}>If this modal appeared, you might be a new user. This site is meant to look like a GoodReads clone at several different stages of development.</div>
      </div>
      <div className={styles.mid_section}>
        <ul className={styles.pnf_mode_description}>
          <li className={styles.pnf_description_block}>You can click the sandwich button on the left hand side of the page to reveal the different iterations of this app. You can click the names of the iterations to see what a page looks like at that stage of development. You can also drag and drop the sandwich button to different height to relocate it (in case it's covering something important).</li>
          <li className={styles.pnf_description_block}>Sometimes the page would not have existed at that stage, so you will need to switch back to a later iteration to continue navigating through the site. You can also drag the button up and down to move it out of the way if it overlaps with a feature.</li>
          <li className={styles.pnf_description_block}>If you click the demo user button on the login or signup pages, a new user will be generated for you. It will either be destroyed when you log out or after approximately one week.</li>
          <li className={styles.pnf_description_block}>This app was built with an express backend and React frontend.</li>
        </ul>
      </div>
    </div>
  )
}

export default Instructions;