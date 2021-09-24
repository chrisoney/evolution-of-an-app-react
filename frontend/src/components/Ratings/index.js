import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './ratings.module.css'

const Ratings = ({ rating, userId, storyId }) => {
  const [content, setContent] = useState([])
  const [shownRating, setShownRating] = useState(rating)
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    const temp = [];
    if (shownRating > 0) {
      for (let i = 0; i < shownRating; i++){
        temp.push('fas')
      }
      for (let j = shownRating; j < 5; j++){
        temp.push('far')
      }
    } else {
      for (let i = 1; i <= 5; i++){
        temp.push('far')
      }
    }
    setContent([...temp])
  }, [shownRating, userId, sessionUser])

  const handleRatingsClick = (e) => {
    console.log(parseInt(e.target.attributes.value.value))
  }

  const handleRatingsHover = (e) => {
    setShownRating(e.target.attributes.value.value)
    // console.log(parseInt(e.target.attributes.value.value))

  }

  const handleMouseLeave = (e) => {
    setShownRating(rating)
  }

  return (
    <div
      className={styles.ratings_container}
      onMouseLeave={sessionUser.id === userId ? (e) => handleMouseLeave(e) : null}
    >
      {content.map((ele, idx) => {
        const val = idx + 1;
        return (
          <span
            value={val}
            key={`user-${userId}-story-${storyId}-rating-${idx}`}
            className={`${ele === 'fas' ? 'fas' : 'far'} fa-star ${ele === 'fas' ? styles.fa_star_on : styles.fa_star_off} ${sessionUser.id === userId ? styles.user_rating : ''}`}
            onClick={sessionUser.id === userId ? (e) => handleRatingsClick(e) : null}
            onMouseOver={sessionUser.id === userId ? (e) => handleRatingsHover(e) : null}
          />
        )
      })}
    </div>
  )
};

export default Ratings;