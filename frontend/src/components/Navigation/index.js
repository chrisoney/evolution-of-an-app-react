import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { useLocation } from "react-router-dom";


import * as sessionActions from '../../store/session';
import styles from  './navigation.module.css';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const stage = useSelector(state => state.ui.stage);

  const location = useLocation()

  const [term, setTerm] = useState('');
  const [revealDropdown, setRevealDropdown] = useState(false);
  let sessionLinks;

  const handleSearch = (e) => {
    e.preventDefault();
    // This will handle search
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        {stage === 0 ? <LoginFormModal /> : <NavLink to="/login">Log In</NavLink>}
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  if (stage === 0) {
    return (
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    );
  } else {
    if (!sessionUser || (location.pathname === '/four-oh-four')) return null;
    return (
      <>
        <div className={styles.navbar}>
          <div className={styles.nav_logo_container}>
            <a href='/' className={styles.nav_logo_link}>
              <img src='/images/logo.png' className={styles.nav_logo} alt='rr-logo'/>
            </a>
          </div>
          {stage >= 6 && (
            <form className={styles.search_form}>
              <input
                type='text'
                value={term}
                className={styles.search_input}
                placeholder="Search Stories"
                onChange={(e) => setTerm(e.target.value)}
              />
              <button
                className={`${styles.search_submit} fas fa-search`}
                onClick={handleSearch}
              />
            </form>
          )}
          <div className={styles.nav_icon_container}>
            <div className={styles.icon_background}>
              <i
                className={`${styles.nav_right_icon} ${styles.user_dropdown_button} fas fa-book-reader`}
                onClick={() => {setRevealDropdown(!revealDropdown)}}
              />
              {revealDropdown && (<div className={`${styles.user_options}`}>
                <div className={styles.dropdown_username}>{sessionUser.username}</div>
                <div className={styles.user_menu_bottom_section}>
                  <button
                    className={styles.logout_button_user_menu_option}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>)}
            </div>
          </div>
        </div>
        {stage >= 2 && (<div className={styles.navbar_lower}>
          <a href='/' className={styles.navbar_text_link}>Home</a>
          <a href={`/users/${sessionUser.id}/bookshelves`} className={styles.navbar_text_link}>My Books</a>
          {stage >= 3 && <a href='/stories' className={styles.navbar_text_link}>Browse</a>}
        </div>)}
      </>
    )
  }
}

export default Navigation;