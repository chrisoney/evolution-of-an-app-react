import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllPlacements, addOrUpdatePlacement } from '../../store/placements';

import styles from './bookshelfSelector.module.css'

const BookshelfSelector = ({ storyId }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  const [shelf, setShelf] = useState(null)
  const [wtrId, setWtrId] = useState(null)

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

  useEffect(() => {
    if (sessionUser && sessionUser.Bookshelves) {
      for (let i = 0; i < sessionUser.Bookshelves.length; i++) {
        const shelf = sessionUser.Bookshelves[i];
        if (shelf.Stories.map(story => story.id).includes(storyId) && !shelf.deleteAllowed) {
          setShelf(shelf)
        }
      }
      setWtrId(sessionUser.Bookshelves.filter(shelf => shelf.name === 'Want To Read')[0].id)
    }
  }, [sessionUser, storyId])

  const handleShelfAdd = (e, bookshelfId) => {
    e.preventDefault();
    dispatch(addOrUpdatePlacement({ bookshelfId, storyId }));
  }
  // const handleShelfRemove = (e) => {

  // }


  return (
    <div className={styles.feed_bookshelf_selector_container}>
      {shelf
          ? (
          <>
            <div className={styles.feed_bookshelf_selected} id={shelf.id}>
              <i className={`fas fa-check ${styles.fa_check} ${styles.feed_check}`} />
              <div className={styles.feed_bookshelf_selected_name}>{shelf.name}</div>
            </div>
            <div className={styles.feed_modal_container}>
              <i className={`${styles.feed_modal_button} fas fa-chevron-down ${styles.fa_chevron_down}`} />
              <div className={styles.feed_modal}>
                {sessionUser.Bookshelves.filter(shelf => !shelf.deleteAllowed).map(shelf => {
                  return (
                    <div className={styles.standard_shelf} value={shelf.id} key={`standard-shelf-${shelf.id}`}>{shelf.name}</div>
                  )
                })}
                {sessionUser.Bookshelves.filter(shelf => shelf.deleteAllowed).map(shelf => {
                  return (
                    <div className={styles.nonstandard_shelf_container} value={shelf.id} key={`custom-shelf-${shelf.id}`}>
                      <input
                        type='checkbox'
                        className={styles.nonstandard_shelf_checkbox}
                        checked={shelf.Stories.map(story => story.id).includes(storyId)}
                        onChange={(e) => handleShelfAdd(e, shelf.id)}
                      />
                      <div className={styles.standard_shelf} id={shelf.id}>{shelf.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </>
      )
        : (
          <>
            <div className={styles.feed_bookshelf_wtr_button} value={wtrId}>Want To Read</div>
            <div className={styles.feed_modal_container}>
              <i className={`${styles.feed_modal_button} fas fa-chevron-down ${styles.fa_chevron_down}`} />
              <div className={styles.feed_modal}>
                {sessionUser.Bookshelves.filter(shelf => !shelf.deleteAllowed).map(shelf => {
                  return (
                    <div className={styles.standard_shelf} value={shelf.id} key={`standard-shelf-${shelf.id}`}>{shelf.name}</div>
                  )
                })}
                {sessionUser.Bookshelves.filter(shelf => shelf.deleteAllowed).map(shelf => {
                  return (
                    <div className={styles.nonstandard_shelf_container} value={shelf.id} key={`custom-shelf-${shelf.id}`}>
                      <input
                        type='checkbox'
                        className={styles.nonstandard_shelf_checkbox}
                        checked={shelf.Stories.map(story => story.id).includes(storyId)}
                        onChange={(e) => handleShelfAdd(e, shelf.id)}
                      />
                      <div className={styles.standard_shelf} id={shelf.id}>{shelf.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </>
      )}
    </div>
  )
}

export default BookshelfSelector;