import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllBookshelves } from "../../store/bookshelves";
import { fetchAllStories } from "../../store/stories";
import { fetchAllPlacements } from "../../store/placements";
import * as sessionActions from '../../store/session';

import styles from './home.module.css'
import BookshelfSelector from '../BookshelfSelector';

function Home() {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage)
  const sessionUser = useSelector(state => state.session.user)
  const bookshelves = useSelector(state => state.bookshelves.bookshelves)
  const stories = useSelector(state => state.stories.stories)
  const placements = useSelector(state => state.placements.placements)

  const [currentlyReadingIds, setCurrentlyReadingIds] = useState([])
  const [customBookshelfIds, setCustomBookshelfIds] = useState([])
  const [currReadingStory, setCurrReadingStory] = useState(null)
  const [wantReadStories, setWantReadStories] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [feed, setFeed] = useState([])

  // Fisher-Yates
  const shuffleArray = array => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  }

  useEffect(() => {
    dispatch(fetchAllBookshelves()).then(() => {
      dispatch(fetchAllStories()).then(() => {
        dispatch(fetchAllPlacements()).then(() => {
          setLoaded(true)
        })
      })
    })
  }, [dispatch, sessionUser])

  useEffect(() => {
    // Need to refactor to include randomized content
    const tempCurrentIds = Object.values(bookshelves).filter(shelf => shelf.name === 'Currently Reading').map(shelf => shelf.id).slice(0,2);
    setCurrentlyReadingIds([...tempCurrentIds])
    const tempCustomIds = Object.values(bookshelves).filter(shelf => shelf.deleteAllowed === true).map(shelf => shelf.id).slice(0,7);
    setCustomBookshelfIds([...tempCustomIds])
  }, [dispatch, bookshelves])

  useEffect(() => {
    if (sessionUser && sessionUser.Bookshelves && Object.values(bookshelves).length > 0) {
      setCurrReadingStory(sessionUser.Bookshelves.filter(shelf => shelf.name === 'Currently Reading')[0].Stories[0])
      setWantReadStories(sessionUser.Bookshelves.filter(shelf => shelf.name === 'Want To Read')[0].Stories.slice(0, 3))
      setFeed(Object.values(placements).filter(placement => {
        const names = ['Want To Read', 'Currently Reading', 'Read']
        return placement.userId !== sessionUser.id && names.includes(bookshelves[placement.bookshelfId].name)
      }).slice(0,10))
    }
  }, [sessionUser, bookshelves, placements])

  const handleDemo = async (e) => {
    setLoaded(false)
    e.preventDefault()
    await dispatch(sessionActions.demo())
  }
  
  if (stage === 0 || !loaded) return null;
  if (sessionUser) {
    if (stage < 3) return null;
    return (
      <div className={`${styles.homepage_content} ${styles.beige}`}>
        <div className={styles.homepage_left}>
          <div className={styles.currently_reading_example_section_container}>
            <div className={styles.currently_reading_example_title}>Currently Reading</div>
            {currReadingStory
              ? (
                <div className={styles.currently_reading_example_body_container}>
                  <a href={`/stories/${currReadingStory.id}`}>
                    <img src={currReadingStory.imageUrl} className={styles.currently_reading_example_image} alt={currReadingStory.title}/>
                  </a>
                  <div className={styles.currently_reading_example_details_container}>
                    <div className={styles.currently_reading_example_story_title}>{currReadingStory.title}</div>
                    <div className={styles.currently_reading_example_story_author}>By {currReadingStory.author}</div>
                  </div>
                </div>
              ): (
                <div className={styles.currently_reading_example_body_container}>
                  <div className={styles.no_stories_yet}>No Stories in shelf yet</div>
                </div>
              )}
            <div className={styles.currently_reading_example_button_section}>
              <a href={`/users/${sessionUser.id}/bookshelves?selected=Currently-Reading`} className={styles.currently_reading_section_button}>View all books</a>
            </div>
          </div>
          <div className={styles.want_to_read_examples_section_container}>
            <div className={styles.want_to_read_examples_title}>Want To Read</div>
            <div className={styles.want_to_read_story_images_container}>
              {wantReadStories.map((story, idx) => {
                return (
                  <a href={`/stories/${story.id}`} key={`want-to-read-story-${idx}`}>
                    <img src={story.imageUrl} className={styles.want_to_read_story_image} alt={story.title} />
                  </a>
                )
              })}
            </div>
            <div className={styles.want_to_read_example_button_section}>
              <a href={`/users/${sessionUser.id}/bookshelves?selected=Want-To-Read`} className={styles.want_to_read_section_button}>View all books</a>
            </div>
          </div>
          <div className={styles.bookshelves_listing_section_container}>
            <div className={styles.bookshelves_listing_title}>Bookshelves</div>
            <div className={styles.bookshelves_listing_shelves_container}>
              {sessionUser.Bookshelves && sessionUser.Bookshelves.map((shelf, idx) => {
                return (
                  <a href={`/users/${sessionUser.id}/bookshelves?selected=${shelf.name.split(' ').join('-')}`} className={styles.bookshelves_listing_shelf_container} key={`shelf-link-${idx}`}>
                    <div className={styles.shelf_count}>{shelf.Stories.length}</div>
                    <div className={styles.shelf_name}>{shelf.name}</div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className={`${styles.homepage_right} ${styles.logged_in}`}>
          <div className={styles.social_feed_section_container}>
            {feed.map((feedEle, idx) => {
              let shelf;
              const date = new Date(feedEle.updatedAt).toString().slice(4, 16)
              const story = stories[feedEle.storyId];
              if (feedEle.bookshelfId) shelf = bookshelves[feedEle.bookshelfId]
              return (
                <div className={styles.feed_instance_container} key={`feed-instance-${idx}`}>
                  <div className={styles.feed_instance_top_section}>
                    <div className={styles.feed_instance_username_section}>
                      {feedEle.bookshelfId ? (
                        <>
                          <a href={`/users/${shelf.User.id}/bookshelves`} className={styles.username_link}>
                            <div className={styles.feed_instance_username}>{shelf.User.username}</div>
                          </a>
                          <div className={styles.feed_action}>{shelf.name === 'Want To Read' ? 'wants to read' : shelf.name === 'Currently Reading' ? 'is reading' : shelf.name === 'Read' ? 'has read' : 'is breaking my app'}</div>
                        </>
                      ) : (
                          null // Return to later once we've started on reviews
                      )}
                    </div>
                    <div className={styles.feed_instance_update_date}>{date.slice(0,6) + ',' + date.slice(6)}</div>
                  </div>
                  <div className={styles.feed_instance_main_content_section}>
                    <a href={`/stories/${feedEle.storyId}`}>
                      <img src={story.imageUrl} className={styles.feed_instance_image} alt={story.title} />
                    </a>
                    <div className={styles.feed_instance_details_section}>
                      <div className={styles.feed_instance_title}>{story.title}</div>
                      <div className={styles.feed_instance_author}>By {story.author}</div>
                      <BookshelfSelector storyId={story.id}/>
                      <div className={styles.feed_instance_description}>{story.description || 'No description provided'}</div>
                      <div className={styles.feed_instance_link_container}>
                        <a href={`/stories/${story.id}`} className={styles.feed_instance_link}>Continue Reading</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
    //   .homepage-right.logged-in
    //     .social-feed-section-container
    //       each placement in feed
    //         .feed-instance-container
    //           .feed-instance-top-section
    //             .feed-instance-username-section
    //               -const shelf = placement.Bookshelf
    //               if (shelf)
    //                 -const action = shelf.name === 'Want To Read' ? 'wants to read' : shelf.name === 'Currently Reading' ? 'is reading' : shelf.name === 'Read' ? 'has read' : 'is breaking my app';
    //                 a(href=`/users/${placement.Bookshelf.User.id}/bookshelves` class='username-link')
    //                   .feed-instance-username= placement.Bookshelf.User.username
    //                 .feed-action= action
    //               else
    //                 a(href=`/users/${placement.User.id}/bookshelves`)
    //                   .feed-instance-username= placement.User.username
    //                 .feed-action rated this
    //                 div(class='ratings-container' data-story-id=placement.storyId data-current-rating=placement.rating)
    //                   - let i = 0, j = placement.rating + 1
    //                   while i < placement.rating
    //                     span(data-score=(i+1) class='fas fa-star')
    //                     - i++
    //                   while j <= 5
    //                     span(data-score=j class='far fa-star')
    //                     - j++
    //             -const date = placement.updatedAt.toString().slice(4, 16)
    //             .feed-instance-update-date #{date.slice(0,6) + ',' + date.slice(6)}
    //           -const story = placement.Story
    //           .feed-instance-main-content-section
                // a(href=`/stories/${story.id}`)
                //   img(src=story.imageUrl class='feed-instance-image')
                // .feed-instance-details-section
    //               .feed-instance-title= story.title
    //               .feed-instance-author By #{story.author}
    //               - let shelf_name, shelf_id
    //               - Object.values(currentUserBookshelfIds).forEach(shelf =>{ if (shelf.stories.includes(story.id) && shelf.standard) {shelf_name = shelf.name; shelf_id = shelf.id}})
    //               if shelf_id === undefined
    //                 -const wtr_id = userInfo.Bookshelves.filter(shelf => shelf.name === 'Want To Read')[0].id
    //                 .feed-bookshelf-selector-container
    //                   div(class='feed-bookshelf-wtr-button' data-story-id=story.id id=wtr_id) Want To Read
    //                   div(class='feed-modal-container')
    //                     i(class='feed-modal-button fas fa-chevron-down')
    //                     .feed-modal
    //                       each shelf in userInfo.Bookshelves.filter(shelf => !shelf.deleteAllowed)
    //                         div(class='standard-shelf' data-story-id=story.id id=shelf.id)= shelf.name
    //                       each shelf in userInfo.Bookshelves.filter(shelf => shelf.deleteAllowed)
    //                         div(class='nonstandard-shelf-container' data-story-id=story.id id=shelf.id)
    //                           input(type='checkbox' class='nonstandard-shelf-checkbox' checked=shelf.Stories.map(story => story.id).includes(story.id))
    //                           div(class='standard-shelf' id=shelf.id)= shelf.name
    //               else
    //                 .feed-bookshelf-selector-container
    //                   div(class='feed-bookshelf-selected' id=shelf_id)
    //                     i.fas.fa-check.feed-check
    //                     .feed-bookshelf-selected-name #{shelf_name}
    //                   div(class='feed-modal-container')
    //                     i(class='feed-modal-button fas fa-chevron-down')
    //                     .feed-modal
    //                       each shelf in userInfo.Bookshelves.filter(shelf => !shelf.deleteAllowed)
    //                         div(class='standard-shelf' data-story-id=story.id id=shelf.id)= shelf.name
    //                       each shelf in userInfo.Bookshelves.filter(shelf => shelf.deleteAllowed)
    //                         div(class='nonstandard-shelf-container' data-story-id=story.id id=shelf.id)
    //                           input(type='checkbox' checked=shelf.Stories.map(story => story.id).includes(story.id))
    //                           div(class='standard-shelf' id=shelf.id)= shelf.name
    //               .feed-instance-description #{story.description || 'No description provided'}
    //               .feed-instance-link-container
    //                 a(href=`/stories/${story.id}` class='feed-instance-link') Continue Reading
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
                    <div className={styles.individual_user_container} key={`indv-user-container-${id}`}>
                      <div className={styles.individual_user_top_section}>
                        <a href={`/users/${shelf.userId}/bookshelves`} className={styles.shelf_link}>
                          <div className={styles.individual_user_container_title}>{shelf.User.username}</div>
                        </a>
                        <div className={styles.individual_user_action}> is currently reading</div>
                      </div>
                      <div className={styles.individual_user_images_container}>
                        {shelf.Stories.map(story => {
                          return (
                            <a href={`/stories/${story.id}`} key={`story-${story.id}`}>
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
                    <div className={styles.homepage_list_container} key={`homepage-list-${id}`}>
                      <div className={styles.homepage_list_left}>
                        <a href={`/users/${shelf.userId}/bookshelves?selected=${shelf.name.split(' ').join('-')}`} className={styles.shelf_link}>
                          <div className={styles.list_section_list_title}>{shelf.name}</div>
                        </a>
                        <a href={`/users/${shelf.userID}/bookshelves`} className={styles.shelf_link}>
                          <div className={styles.list_section_author}>{shelf.User.username}</div>
                        </a>
                      </div>
                      <div className={styles.homepage_list_right}>
                        {shelf.Stories.slice(0, 6).map(story => {
                          return (
                            <a href={`/stories/${story.id}`} key={`${story.id}`}>
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