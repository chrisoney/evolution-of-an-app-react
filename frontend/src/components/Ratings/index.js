import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './ratings.module.css'

const Ratings = ({ rating, userId }) => {
  const [content, setContent] = useState(null)
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    const temp = [];
    if (rating > 0) {
      for (let i = 0; i < rating; i++){
        temp.push(
          <span
            class={`fas fa-star ${userId === sessionUser.id ? styles.user_rating : ''}`} 
          />
        )
      }
      for (let j = rating; j < 5; j++){
        temp.push(
          <span
            class={`far fa-star ${userId === sessionUser.id ? styles.user_rating : ''}`} 
          />
        )
      }
    } else {
      for (let i = 1; i <= 5; i++){
        temp.push(
          <span
            class={`far fa-star ${userId === sessionUser.id ? styles.user_rating : ''}`} 
          />
        )
      }
    }
    setContent(temp.join(''))
  }, [rating, userId, sessionUser])

  return (
    <div className={styles.ratings_container}>
      {content}
    </div>
  )
};

export default Ratings;