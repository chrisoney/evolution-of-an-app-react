import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from './loginForm.module.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const stage = useSelector((state) => state.ui.stage)
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const handleDemo = async (e) => {
    e.preventDefault()
    await dispatch(sessionActions.demo())
  }

  return stage === 0 ? (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  ) : (
      <>
        <a href='/' className={styles.logo_container}>
          <img src='/images/logo.png' className={styles.auth_logo} alt='logo img'/>
        </a>
        <div className={styles.form_container}>
          <h1 className={styles.auth_title}>Sign in to RoyalReads</h1>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <form>
            <div className={styles.form_group}>
              <label className={styles.form_label}>Username or Email</label>
              <input
                type="text"
                value={credential}
                className={styles.form_control}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.form_label}>Password</label>
              <input
                type="password"
                value={password}
                className={styles.form_control}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_buttons}>
              <button
                className={styles.positive_button}
              >Sign in</button>
              <button
                className={styles.positive_button}
                onClick={handleDemo}
              >Demo</button>
              <a href='/' className={styles.neutral_link}>Cancel</a>
            </div>
          </form>
          <div className={styles.auth_bottom_nav}>
            <span>Not a member?</span>
            <a href="/signup" className={styles.neutral_link}>Sign up</a>
          </div>
        </div>
      
      </>
  )
}

export default LoginFormPage;
