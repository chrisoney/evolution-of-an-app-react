import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../store/session';
import styles from './home.module.css'

function Home() {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage)
  const sessionUser = useSelector(state => state.session.user)
  if (stage === 0) return null;

  const handleDemo = async (e) => {
    e.preventDefault()
    await dispatch(sessionActions.demo())
  }

  if (sessionUser) {
    return null
  } else {
    return (
      <>
        <div className={styles.logo_container}>
          <a href='/' className={styles.logo_link}>
            <img src='/images/logo.png' className={styles.auth_logo} alt='auth logo'/>
          </a>
        </div>
        <div className={styles.header}>
          <img src='/images/royal.jpg' className={styles.header_image} alt='royal img' />
          <div className={styles.auth_container}>
            <div className={styles.auth_container_title}>Discover and Read More</div>
            <form>
              <button
                className={styles.demo_button}
                onClick={handleDemo}
              >
                Demo Login
              </button>
            </form>
            <a href="/signup" className={styles.signup_button}>Sign up with email</a>
            <div className={styles.auth_container_description}>By creating an account, you agree to <b>nothing</b> and are beholden to <b>no one</b>.</div>
            <div className={styles.login_container}>
              <div className={styles.login_description}>Already a member?</div>
              <a href='/login' className={styles.login_text}>Sign in</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home;