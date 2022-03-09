import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearchedStories } from '../../store/stories';
import { fetchAllBookshelves } from '../../store/bookshelves';

import styles from './search.module.css';
import Ratings from '../Ratings';
import BookshelfSelector from '../BookshelfSelector';
import Loading from '../Loading';

const Search = (location) => {
  const dispatch = useDispatch();
  const searchStories = useSelector(state => state.stories.search)
  const term = location.state ? location.state.term ? location.state.term : '' : ''
  const [searchPageInput, setSearchPageInput] = useState(term);
  const [filter, setFilter] = useState('all')
  const [loadedStories, setLoadedStories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchAllBookshelves()).then(() => {
      setLoaded(true)
    })
  }, [dispatch])

  useEffect(() => {
    setLoadedStories([...Object.values(searchStories)])
  }, [searchStories])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchSearchedStories(filter, searchPageInput))
  }
  if (!loaded) return <Loading />
  return (
    <div className={styles.search_page_parent_container}>
      <div className={styles.search_page_container}>
        <div className={styles.search_page_title}>Search</div>
        <form className={styles.search_page_form} onSubmit={handleSearchSubmit}>
          <div className={styles.search_form_top_bar}>
            <input type='text'
              className={styles.search_page_input}
              value={searchPageInput}
              placeholder="Search by Story Title, Author, or Description"
              onChange={(e) => setSearchPageInput(e.target.value)}
            />
            <button type='submit' className={styles.search_page_submit}>Search</button>
          </div>
          <div className={styles.search_page_options}>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='all'
                value='all'
                className={styles.radio_input}
                checked={filter === 'all'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='all'>all</label>
            </div>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='title'
                value='title'
                className={styles.radio_input}
                checked={filter === 'title'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='title'>title</label>
            </div>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='author'
                value='author'
                className={styles.radio_input}
                checked={filter === 'author'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='author'>author</label>
            </div>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='description'
                value='description'
                className={styles.radio_input}
                checked={filter === 'description'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='description'>description</label>
            </div>
          </div>
        </form>
        <div className={styles.search_page_story_section}>
          {loadedStories.map(story => {
            const ratings = story.Reviews.map(review => review.rating).filter(rating => rating !== null)
            const avgRating = Math.round(ratings.reduce((a,b) => {return a + b}, 0) / ratings.length * 100) / 100
            return (
              <div className={styles.story_container} key={`search-story-${story.id}`}>
                <div className={styles.story_left}>
                  <a href={`/stories/${story.id}`}>
                    <img src={story.imageUrl} className={styles.search_story_image} alt={story.title}/>
                  </a>
                </div>
                <div className={styles.story_right}>
                  <a href={`/stories/${story.id}`}>
                    <div className={styles.search_page_story_title}>{story.title}</div>
                  </a>
                  <div className={styles.search_page_story_author}>by {story.author}</div>
                  <div className={styles.search_page_review_info_section}>
                    {ratings.length === 0 ? <div className={styles.no_ratings}>No ratings yet</div> : <Ratings rating={avgRating} userId={0} storyId={story.id} />}
                    {avgRating || 0} avg rating - {ratings.length} ratings
                  </div>
                  <BookshelfSelector storyId={story.id}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// .story-container
//   .story-left
//     a(href=`/stories/${story.id}`)
//       img(src=story.imageUrl class='search-story-image')
//   .story-right
//     a(href=`/stories/${story.id}`)
//       .search-page-story-title= story.title
//     .search-page-story-author by #{story.author}
//     .search-page-review-info-section
//       -const ratings = story.Reviews.map(review => review.rating).filter(rating => rating !== null)
//       -const reviewContents = otherReviews.map(review => review.content).filter(content => content !== null && content !== '')
//       -const avgRating = Math.round(ratings.reduce((a,b) => {return a + b}, 0) / ratings.length * 100) / 100
//       if ratings.length === 0
//         .no-ratings No ratings yet
//       //- +ratingsSection(avgRating, story.id, false)
//       else
//         div(class='ratings-container' data-story-id=story.id data-current-rating=avgRating)

export default Search;