import React from 'react';
import styles from './pageNotMade.module.css'

const FourOhFour = () => {
  return (
    <div className={styles.background_container.four_oh_four}>
      <div className={styles.info_container}>
        <div className={styles.top_section}>
          <div className={styles.pnf_title}>This page doesn't exist.</div>
          <div className={styles.pnf_description}>Which means you've found yourself off the beaten path</div>
        </div>
        <div className={styles.mid_section}>
          <div className={styles.pnf_mode_description}>Please navigate to an existing page to continue using the app, and have a wonderful day!</div>
        </div>
      </div>
    </div>
  );
}

export default FourOhFour;