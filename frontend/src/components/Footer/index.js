import React from 'react';
import { useLocation } from "react-router-dom";
import styles from './footer.module.css';

const Footer = () => {
  const location = useLocation()
  if (location.pathname === 'page-not-made') return null;

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_left}>
        <span className={styles.connect_title}>Connect</span>
        <div className={styles.connect_buttons}>
          <a href="https://github.com/chrisoney" className={styles.button_container}>
            <i className={`${styles.o_link_button} fab fa-github`} />
          </a>
          <a href="https://www.linkedin.com/in/christopher-oney-317b84132/" className={styles.button_container}>
            <i className={`${styles.o_link_button} fab fa-linkedin`} />
          </a>
          <a href="https://angel.co/u/christopher-oney" className={styles.button_container}>
            <i className={`${styles.o_link_button} fab fa-angellist`} />
          </a>
          <a href="https://www.chrisoney.com" className={styles.button_container}>
            <i className={`${styles.o_link_button} fas fa-smile`} />
          </a>
        </div>
      </div>
      <div className={styles.footer_right}>
        <span className={styles.footer_info}>2021 RoyalReads</span>
        <span className={styles.footer_info}>Only version</span>
      </div>
    </div>
  )

  //       a(href="https://github.com/chrisoney" class='button-container')
  //         i(class='o-link-button fab fa-github')
  //       a(href="https://www.linkedin.com/in/christopher-oney-317b84132/" class='button-container')
  //         i(class='o-link-button fab fa-linkedin')
  //       a(href="https://angel.co/u/christopher-oney" class='button-container')
  //         i(class='o-link-button fab fa-angellist')
  //       a(href="https://www.chrisoney.com" class='button-container')
  //         i(class='o-link-button fas fa-smile')

}

export default Footer;