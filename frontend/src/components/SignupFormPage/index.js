import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from './signupForm.module.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const stage = useSelector(state => state.ui.stage)
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const handleDemo = async (e) => {
    e.preventDefault()
    await dispatch(sessionActions.demo())
  }

  return stage === 0 ? (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  ) : (
      <>
        <a href='/' className={styles.logo_container}>
          <img src='/images/logo.png' className={styles.auth_logo} alt='auth logo'/>
        </a>
        <div className={styles.form_container}>
          <h1 className={styles.auth_title}>Sign up for RoyalReads</h1>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label className={styles.form_label}>Username</label>
              <input
                type="text"
                value={username}
                className={styles.form_control}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.form_label}>Email</label>
              <input
                type="email"
                value={email}
                className={styles.form_control}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className={styles.form_group}>
              <label className={styles.form_label}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                className={styles.form_control}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_buttons}>
              <button type="submit" className={styles.positive_button}>Sign Up</button>
              <button
                className={styles.positive_button}
                onClick={handleDemo}
              >Demo</button>
              <a href='/' className={styles.neutral_link}>Cancel</a>
            </div>
          </form>
        </div>
        <div className={styles.auth_bottom_nav}>
          <span>Already a member?</span>
          <a href="/login" className={styles.neutral_link}>Sign in</a>
        </div>
      </>
  );
}

export default SignupFormPage;
