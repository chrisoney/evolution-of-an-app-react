import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllBookshelves } from "../../store/bookshelves";
import * as sessionActions from '../../store/session';
import styles from './home.module.css'

function Home() {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage)
  const sessionUser = useSelector(state => state.session.user)
  const bookshelves = useSelector(state => state.bookshelves.bookshelves)

  const [currentlyReadingIds, setCurrentlyReadingIds] = useState([])
  const [customBookshelfIds, setCustomBookshelfIds] = useState([])
  
  useEffect(() => {
    dispatch(fetchAllBookshelves())
  }, [dispatch])

  useEffect(() => {
    // Need to refactor to include randomized content
    const tempCurrentIds = Object.values(bookshelves).filter(shelf => shelf.name === 'Currently Reading').map(shelf => shelf.id).slice(0,2);
    setCurrentlyReadingIds([...tempCurrentIds])
    const tempCustomIds = Object.values(bookshelves).filter(shelf => shelf.deleteAllowed === true).map(shelf => shelf.id).slice(0,7);
    setCustomBookshelfIds([...tempCustomIds])
  }, [dispatch, bookshelves])
  
  const handleDemo = async (e) => {
    e.preventDefault()
    await dispatch(sessionActions.demo())
  }
  
  if (stage === 0) return null;
  if (sessionUser) {
    return null
  } else {
    return (
      <>
        <div className={styles.home_top_container}>
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
        </div>
        {stage >= 2 && (
          <div className={styles.homepage_content}>
            <div className={styles.homepage_left}>
              <div className={styles.currently_reading_examples_container}>
                <div className={styles.currently_reading_examples_title}>Here's what people are reading</div>
                {currentlyReadingIds.map(id => {
                  const shelf = bookshelves[id];
                  return (
                    <div className={styles.individual_user_container}>
                      <div className={styles.individual_user_top_section}>
                        <a href={`/users/${shelf.userId}/bookshelves`} className={styles.shelf_link}>
                          <div className={styles.individual_user_container_title}>{shelf.User.username}</div>
                        </a>
                        <div className={styles.individual_user_action}> is currently reading</div>
                      </div>
                      <div className={styles.individual_user_images_container}>
                        {shelf.Stories.map(story => {
                          return (
                            <a href={`/stories/${story.id}`}>
                              <img src={story.imageUrl} className={styles.individual_user_story_image} title={story.title} alt={story.title} />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={styles.homepage_right}>
              <div className={styles.list_container}>
                <div className={styles.homepage_list_section_title}>Love Lists?</div>
                {customBookshelfIds.map(id => {
                  const shelf = bookshelves[id];
                  return (
                    <div className={styles.homepage_list_container}>
                      <div className={styles.homepage_list_left}>
                        <a href={`/users/${shelf.userId}/bookshelves?selected=${shelf.name.split(' ').join('-')}`} className={styles.shelf_link}>
                          <div className={styles.list_section_list_title}>{shelf.name}</div>
                        </a>
                        <a href={`/users/${shelf.userID}/bookshelves`} className={styles.shelf_link}>
                          <div className={styles.list_section_author}>{shelf.User.username}</div>
                        </a>
                      </div>
                      <div className={styles.homepage_list_right}>
                        {shelf.Stories.slice(0,6).map(story => {
                          return (
                            <a href={`/stories/${story.id}`}>
                              <img src={story.imageUrl} className={styles.homepage_list_right_image} alt={story.title}/>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Home;