import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Ratings from '../Ratings';

import { fetchAllStories } from '../../store/stories';
import styles from './storyPage.module.css';

const StoryPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const stage = useSelector(state => state.ui.stage);
  const sessionUser = useSelector(state => state.session.user);
  const stories = useSelector(state => state.stories.stories);
  const [story, setStory] = useState(null)
  const [userReview, setUserReview] = useState(null)
  const [otherReviews, setOtherReviews] = useState([])
  const [revealTags, setRevealTags] = useState(false)
  const [revealWarnings, setRevealWarnings] = useState(false)

  useEffect(() => {
    dispatch(fetchAllStories())
  }, [dispatch])

  useEffect(() => {
    setStory(stories[id])
  }, [stories, id])

  useEffect(() => {
    if (story && story.Reviews) {
      setUserReview(story.Reviews.filter(review => review.userId === sessionUser.id)[0])
      setOtherReviews([...story.Reviews.filter((review) => review.userId !== sessionUser.id)])
    }
  }, [story, sessionUser])

  // useEffect(() => {
  // }, [story, sessionUser])

  useEffect(() => {

  })
  if (!story) return null;
  return (
    <div className={styles.page_container}>
      <div className={styles.story_page_left_side}>
        <div className={styles.story_stick_section}>
          <img src={story.imageUrl} className={styles.story_image} alt={story.title} />
          {/* This is where the component to change bookshelves will be. I'll work on that in a bit */}
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
                  <div className={`${styles.story_description} ${styles.shortened}`}>
                    {story.description}
                  </div>
                  <button className={styles.expand}>...more</button>
                </>
            )}
          </div>
          {stage >= 5 && (
            <div className={styles.story_tags_section}>
              {story.Tags.slice(0, 3).map((tag) => {
                // Something here for the redirect
                return (<a href={`/stories?selectedTag=${tag.name}`}>
                  <div className={styles.tag_element}>{tag.name}</div>
                </a>)
              })}
              <i
                className={`${styles.tag_toggle} fas ${revealTags ? 'fa-minus' : 'fa-plus'}`}
                onClick={() => setRevealTags(!revealTags)}
              />
              <div className={styles.story_tags_inner_section}>
                {revealTags && story.Tags.slice(3).map((tag) => {
                  // Something here for the redirect
                  return (<a href={`/stories?selectedTag=${tag.name}`}>
                    <div className={styles.tag_element}>{tag.name}</div>
                  </a>)
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
                    {story.warnings.warnings.map(warning => {
                      return (<div className={styles.story_warning}>{warning}</div>)
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
       {stage >= 4 &&  <div className={styles.reviews_section}>
          <div className={styles.logged_in_user_rating_section}>
            <div className={styles.new_user_review_left}>
              <div className={styles.new_review_prompt}>Your review</div>
              <Ratings rating={userReview ? userReview.rating : 0} userId={sessionUser.id} storyId={story.id} />
            </div>
            {!userReview.content && (
              <div className={styles.new_user_review_right}>
                <button className={styles.reveal_form}>Write a Review</button>
              </div>
            )}
          </div>
          <div className={styles.logged_in_user_review_content_section}>
            <div className={styles.user_content_container}>
              <div className={styles.user_review_content}>{userReview.content || ''}</div>
              <button className={styles.reveal_form_edit}>Edit review</button>
            </div>
            <div className={styles.user_review_form_section}>
              <textarea className={styles.new_review_content_input} />
              <div className={styles.user_review_form_button_section}>
                <button className={styles.cancel_review_content_button}>Cancel</button>
                <button className={styles.submit_review_content_button} data-story-id={story.id}>Submit</button>
              </div>
            </div>
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
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default StoryPage;

  // .page-container
  //   .story-page-left-side
  //     .story-sticky-section
  //       img(src=story.imageUrl class='story-image')
  //       if story.Bookshelves.length > 0
  //         div(class='bookshelf-button-container added')
  //           i(class='fas fa-check')
  //           div(class='bookshelf-button-added' id=story.Bookshelves[0].id) #{story.Bookshelves[0].name}
  //       else
  //         div(class='bookshelf-button-container')
  //           div.placeholder
  //           div(class='bookshelf-button' id=wantToReadId) Want To Read
  //           i(class='fas fa-chevron-down')
  //   .story-page-right-side
  //     .story-details-container
  //       .story-title= story.title
  //       .story-author= story.author
  //       .story-description-container
  //         if story.description.length === 0
  //           .story-description.none No Description Provided
  //         else
  //           .story-description.shortened= story.description
  //           button(class='expand') ...more
  //       if (parseInt(mode) >= 5)
  //         .story-tags-section
  //           each tag in story.Tags.slice(0,3)
  //             a(href=`/stories?selectedTag=${tag.name}`)
  //               .tag-element= tag.name
  //           if story.Tags.length > 3
  //             .tag-toggle.fas.fa-plus
  //             .story-tags-inner-section.hidden
  //               each tag in story.Tags.slice(3)
  //                 a(href=`/stories?selectedTag=${tag.name}`)
  //                   .tag-element= tag.name
  //       .story-warnings-section
  //         if story.warnings.warnings.length === 0
  //           .warnings-none No Warnings
  //         else
  //           .warnings-toggle Reveal Warnings
  //           .story-warnings-container.hidden
  //             each warning in story.warnings.warnings
  //               .story-warning= warning
        // .story-other-details-section
        //   .other-details-page-count Royal Road Version, #{story.pageCount} pages
        //   .other-details-status Current Status: 
        //     div(class=`${story.status === 'HIATUS' ? 'status-red':'status-green'}`) #{story.status[0] + story.status.slice(1).toLowerCase()}
        //   .other-details-link: a(href=story.linkUrl) Link to Story
  //     if parseInt(mode) >= 4
  //       .reviews-section
  //         - const reviews = story.Reviews
  //         - const userReview = reviews.filter(review => review.userId === user.id)[0]
  //         .logged-in-user-rating-section
  //           if (userReview)
            //   .new-user-review-left
            //     .new-review-prompt Your review
            //     //- +ratingsSection(userReview.rating, story.id, true)
            //     div(class='ratings-container' data-story-id=story.id data-current-rating=userReview.rating)
            //       - let i = 0, j = userReview.rating + 1
            //       while i < userReview.rating
            //         span(data-score=(i+1) class='fas fa-star user-rating')
            //         - i++
            //       while j <= 5
            //         span(data-score=j class='far fa-star user-rating')
            //         - j++
            //   if(!userReview.content)
            //     .new-user-review-right
            //       button(class='reveal-form') Write a Review
            // else
            //   .new-user-review-left
            //     .new-review-prompt #{user.username}, start your review of #{story.title}
            //     div(class='ratings-container' data-story-id=story.id data-current-rating=rating)
            //       - let i = 0
            //       while i < 5
            //         span(data-score=(i+1) class='far fa-star user-rating')
            //         - i++
            //   .new-user-review-right
            //     button(class='reveal-form') Write a Review
  //         .logged-in-user-review-content-section
  //           if (userReview)
  //             .user-content-container
  //               div(class=`user-review-content`)= userReview.content
  //               button(class='reveal-form-edit') Edit review
  //           else
  //             .user-content-container.hidden
  //               div(class=`user-review-content`)= ''
  //               button(class='reveal-form-edit') Edit review
            
  //           .user-review-form-section.hidden
  //             textarea(class='new-review-content-input')
  //             .user-review-form-button-section
  //               button(class='cancel-review-content-button') Cancel
  //               button(class='submit-review-content-button' data-story-id=story.id) Submit
          // .other-reviews-section
          //   -const otherReviews = reviews.filter(review => review.userId !== user.id)
          //   .other-reviews-title-section
          //     .other-reviews-title Community Reviews
          //     if otherReviews.length > 0
          //       .other-reviews-numbers Showing 1 - #{otherReviews.length}
          //     else
          //       .other-reviews-numbers Showing 0 - 0

          //   .other-reviews-general-info-section
          //     -const ratings = otherReviews.map(review => review.rating).filter(rating => rating !== null)
          //     -const reviewContents = otherReviews.map(review => review.content).filter(content => content !== null && content !== '')
          //     -const avgRating = ratings.reduce((a,b) => {return a + b}, 0) / ratings.length
          //     .avg-star-section
          //       if ratings.length === 0
          //         .no-ratings No ratings yet
          //       //- +ratingsSection(avgRating, story.id, false)
          //       else
          //         div(class='ratings-container' data-story-id=story.id data-current-rating=avgRating)
          //               - let i = 0, j = avgRating + 1
          //               while i < avgRating
          //                 span(data-score=(i+1) class='fas fa-star')
          //                 - i++
          //               while j <= 5
          //                 span(data-score=j class='far fa-star')
          //                 - j++
          //     .dot &#183;
          //     .num-review-parts #{reviewContents.length} Reviews
          //     .dot &#183;
          //     .num-review-parts #{ratings.length} Ratings
  //           .other-reviews-social-container
  //             //- -const otherReviews = reviews.filter(review => review.userId !== user.id)
  //             each review in otherReviews
  //               .review-container
  //                 .review-header
  //                   .review-header-left
  //                     a(href=`/users/${review.User.id}/bookshelves` class='user-bookshelves-link')
  //                       .review-username= review.User.username
  //                     .review-action rated it
  //                     //- +ratingsSection(review.rating, story.id, false)
  //                     div(class='ratings-container' data-story-id=story.id data-current-rating=review.rating)
  //                       - let x = 0, y = review.rating + 1
  //                       while x < review.rating
  //                         span(data-score=(x+1) class='fas fa-star')
  //                         - x++
  //                       while y <= 5
  //                         span(data-score=y class='far fa-star')
  //                         - y++
  //                   .review-header-right
  //                     .review-date= review.createdAt.toString().slice(4, 16)
  //                 .review-content-container
  //                   .review-content= review.content