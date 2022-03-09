import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Ratings from '../Ratings';
import StoryBookshelfSelector from '../BookshelfSelector/StoryBookshelfSelector';
import Loading from '../Loading';

import { fetchAllStories } from '../../store/stories';
import { fetchAllUsers } from '../../store/users';
import { createOrUpdateReview } from '../../store/reviews';
import styles from './storyPage.module.css';

const StoryPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const stage = useSelector(state => state.ui.stage);
  const sessionUser = useSelector(state => state.session.user);
  const stories = useSelector(state => state.stories.stories);
  const reviews = useSelector(state => state.reviews.reviews);
  const users = useSelector(state => state.users.users);
  const [story, setStory] = useState(null)
  const [userReview, setUserReview] = useState(null)
  const [otherReviews, setOtherReviews] = useState([])
  const [revealTags, setRevealTags] = useState(false)
  const [revealReviewForm, setRevealReviewForm] = useState(false)
  const [revealWarnings, setRevealWarnings] = useState(false)
  const [expandStory, setExpandStory] = useState(false)
  const [content, setContent] = useState('');
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    dispatch(fetchAllStories()).then(() => {
      dispatch(fetchAllUsers()).then(() => {
        setLoaded(true)
      })
    })
  }, [dispatch])

  useEffect(() => {
    setStory(stories[id])
  }, [stories, id])

  useEffect(() => {
    if (story && Object.values(reviews).length > 0) {
      console.log('TEST TEST TEST')
      setUserReview(Object.values(reviews).filter(review => review.userId === sessionUser.id && review.storyId === story.id)[0])
      setContent(Object.values(reviews).filter(review => review.userId === sessionUser.id && review.storyId === story.id)[0]?.content || '')
      setOtherReviews([...story.Reviews.filter((review) => review.userId !== sessionUser.id)])
    }
  }, [story, sessionUser, reviews])

  const submitReviewContent = (e) => {
    dispatch(createOrUpdateReview({
      userId: sessionUser.id,
      storyId: id,
      content
    })).then(review => {
      setUserReview(review);
    })
    setRevealReviewForm(false)
  }

  if (!story) return null;
  if (!loaded) return <Loading />
  return (
    <div className={styles.page_container}>
      <div className={styles.story_page_left_side}>
        <div className={styles.story_stick_section}>
          <img src={story.imageUrl} className={styles.story_image} alt={story.title} />
          <StoryBookshelfSelector storyId={story.id} />
        </div>
      </div>
      <div className={styles.story_page_right_side}>
        <div className={styles.story_details_container}>
          <div className={styles.story_title}>{story.title}</div>
          <div className={styles.story_author}>{story.author}</div>
          <div className={styles.story_description_container}>
            {story.description.length === 0 ? (
                <div className={`${styles.story_description} ${styles.none}`}>
                  No Description Provided
                </div>
            ) : (
                <>
                  <div
                    className={`${styles.story_description} ${expandStory ? '' : styles.shortened}`}
                  >
                    {story.description}
                  </div>
                  <button
                    className={styles.expand}
                    onClick={() => setExpandStory(!expandStory)}
                  >{expandStory ? '...less' : '...more'}</button>
                </>
            )}
          </div>
          {stage >= 5 && (
            <div className={styles.story_tags_section}>
              {story.Tags.slice(0, 3).map((tag) => {
                return (<Link to={{ pathname: '/stories', state: { selectedTag: tag.id}}} key={`tag-${tag.id}`}>
                  <div className={styles.tag_element}>{tag.name}</div>
                </Link>)
              })}
              <i
                className={`${styles.tag_toggle} fas ${revealTags ? 'fa-minus' : 'fa-plus'}`}
                onClick={() => setRevealTags(!revealTags)}
              />
              <div className={styles.story_tags_inner_section}>
                {revealTags && story.Tags.slice(3).map((tag) => {
                  return (<Link to={{ pathname: '/stories', state: { selectedTag: tag.id}}} key={`tag-${tag.id}`}>
                    <div className={styles.tag_element}>{tag.name}</div>
                  </Link>)
                })}
              </div>
            </div>
          )}
          <div className={styles.story_warnings_section}>
            {story.warnings.warnings.length === 0 ? (
                <div className={styles.warnings_none}>No Warnings</div>
            ) : (
                <>
                  <div
                    className={styles.warnings_toggle}
                    onClick={() => setRevealWarnings(!revealWarnings)}
                  >{revealWarnings ? 'Hide Warnings' : 'Reveal Warnings'}</div>
                  {revealWarnings && <div className={styles.story_warnings_container}>
                    {story.warnings.warnings.map((warning, idx) => {
                      return (<div className={styles.story_warning} key={`warning-${idx}`}>{warning}</div>)
                    })}
                  </div>}
                </>
              )}
          </div>
          <div className={styles.story_other_details_section}>
            <div className={styles.other_details_page_count}>Royal Road Version, {story.pageCount} pages</div>
            <div className={styles.other_details_status}>Current Status:
              <div className={`${story.status === 'HIATUS' ? 'status_red' : 'status_green'}`}>{story.status[0] + story.status.slice(1).toLowerCase()}</div>
            </div>
            <div className={styles.other_details_link}>
              <a href={story.linkUrl}>Link to Story</a>
            </div>
          </div>
        </div>
       {stage >= 4 && (<div className={styles.reviews_section}>
          <div className={styles.logged_in_user_rating_section}>
            <div className={styles.new_user_review_left}>
              <div className={styles.new_review_prompt}>Your review</div>
              <Ratings rating={userReview ? userReview.rating : 0} userId={sessionUser.id} storyId={story.id} />
            </div>
            {(!userReview || !userReview.content) && !revealReviewForm && (
              <div className={styles.new_user_review_right}>
                <button
                  className={styles.reveal_form}
                  onClick={(e) => setRevealReviewForm(true)}
                >Write a Review</button>
              </div>
            )}
          </div>
          <div className={styles.logged_in_user_review_content_section}>
            {userReview && userReview.content && !revealReviewForm && (
              <div className={styles.user_content_container}>
                <div className={styles.user_review_content}>{userReview.content}</div>
                <button
                  className={styles.reveal_form_edit}
                  onClick={(e) => setRevealReviewForm(true)}
                >Edit review</button>
              </div>)}
            {revealReviewForm && (
              <div className={styles.user_review_form_section}>
                <textarea
                  className={styles.new_review_content_input}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className={styles.user_review_form_button_section}>
                  <button
                    className={styles.cancel_review_content_button}
                    onClick={(e) => setRevealReviewForm(false)}
                  >Cancel</button>
                  <button
                    className={styles.submit_review_content_button}
                    data-story-id={story.id}
                    onClick={submitReviewContent}
                  >Submit</button>
                </div>
              </div>)
            }
            <div className={styles.other_reviews_section}>
              <div className={styles.other_reviews_title_section}>
                <div className={styles.other_review_title}>Community Reviews</div>
                <div className={styles.other_reviews_numbers}>{otherReviews.length > 0 ? `Showing 1 - ${otherReviews.length}` : 'Showing 0 - 0'}</div>
              </div>
              <div className={styles.other_reviews_general_info_section}>
                <div className={styles.avg_star_section}>
                  {story.Ratings === 0
                    ? <div className={styles.no_ratings}>No ratings yet</div>
                    : <Ratings
                      rating={otherReviews
                        .map(review => review.rating)
                        .filter(rating => rating !== null)
                        .reduce((a, b) => { return a + b }, 0) / otherReviews
                          .map(review => review.rating)
                          .filter(rating => rating !== null)
                          .length}
                      userId={0}
                      storyId={story.id} />}
                </div>
                <div className={styles.dot}>&#183;</div>
                <div className={styles.num_review_parts}>{otherReviews
                  .map(review => review.content)
                  .filter(content => content !== null && content !== '').length} Reviews</div>
                <div className={styles.dot}>&#183;</div>
                <div className={styles.num_review_parts}>{otherReviews
                  .map(review => review.rating)
                  .filter(rating => rating !== null).length} Ratings</div>
              </div>
              <div className={styles.other_reviews_social_container}>
                {otherReviews.map((review, idx) => {
                  return (
                    <div className={styles.review_container} key={`${review.id}-${idx}`}>
                      <div className={styles.review_header}>
                        <div className={styles.review_header_left}>
                          <a href={`/users/${review.userId}/bookshelves`} className={styles.user_bookshelves_link}>
                            <div className={styles.review_username}>{users[review.userId]?.username || ''}</div>
                          </a>
                          <div className={styles.review_action}>rated it</div>
                          <Ratings rating={review.rating} userId={review.userId} storyId={review.storyId} />
                        </div>
                        <div className={styles.review_header_right}>
                          <div className={styles.review_date}>{new Date(review.createdAt).toString().slice(4, 16)}</div>
                        </div>
                      </div>
                      <div className={styles.review_content_container}>
                        <div className={styles.review_content}>{review.content}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default StoryPage;