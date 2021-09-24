import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './ratings.module.css'

const Ratings = ({ rating, userId, storyId }) => {
  const [content, setContent] = useState([])
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    const temp = [];
    if (rating > 0) {
      for (let i = 0; i < rating; i++){
        temp.push('fas')
      }
      for (let j = rating; j < 5; j++){
        temp.push('far')
      }
    } else {
      for (let i = 1; i <= 5; i++){
        temp.push('far')
      }
    }
    setContent([...temp])
  }, [rating, userId, sessionUser])

  const handleRatingsClick = (e) => {
    console.log(e.target.testing)
  }

  return (
    <div className={styles.ratings_container}>
      {content.map((ele, idx) => {
        const val = idx + 1;
        return (
          <span
            value={val}
            testing={val}
            key={`user-${userId}-story-${storyId}-rating-${idx}`}
            className={`${ele === 'fas' ? 'fas' : 'far'} fa-star ${sessionUser.id === userId ? styles.user_rating : ''}`}
            onClick={(e) => handleRatingsClick(e)}
          />
        )
      })}
    </div>
  )
};

export default Ratings;