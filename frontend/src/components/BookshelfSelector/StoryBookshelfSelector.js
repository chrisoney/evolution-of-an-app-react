import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addOrUpdatePlacement, fetchAllPlacements } from '../../store/placements';
import { fetchAllBookshelves } from '../../store/bookshelves';
import { showModal, setCurrentModal, setModalProps } from '../../store/ui';
import BookshelfSelectorStandardmodal from '../Modal/BookshelfSelectorStandardModal';
import styles from './bookshelfSelector.module.css';

const StoryBookshelfSelector = ({ storyId }) => {
  const mainButton = useRef(null)
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const placements = useSelector(state => Object.values(state.placements.placements))
  const bookshelves = useSelector(state => state.bookshelves.bookshelves)
  const [loaded, setLoaded] = useState(false)
  const [shelf, setShelf] = useState(null);
  const [wtrId, setWtrId] = useState(null)

  useEffect(() => {
    dispatch(fetchAllBookshelves()).then(() => {
      dispatch(fetchAllPlacements())
    })
  }, [dispatch])

  useEffect(() => {
    const id = Object.values(bookshelves).filter(shelf => {
      return shelf.name === 'Want To Read' && shelf.userId === sessionUser.id
    })[0]?.id;
    setWtrId(id)
  }, [bookshelves, sessionUser])

  useEffect(() => {
    const shelfIds = sessionUser.Bookshelves.map(shelf => shelf.id);
    const storyPlacements = placements.filter(placement => placement.storyId === storyId);
    const currShelved = storyPlacements.filter(placement => (shelfIds.includes(placement.bookshelfId) && !bookshelves[placement.bookshelfId].deleteAllowed))[0]?.bookshelfId || null;
    setShelf(bookshelves[currShelved] || null);
    setLoaded(true)
  }, [placements, sessionUser, storyId, bookshelves])


  const handleWtrClick = (e) => {
    dispatch(addOrUpdatePlacement(wtrId, storyId, sessionUser.id))
  }

  const handleEntryModalOpen = (e, largeVersion) => {
    dispatch(setCurrentModal(BookshelfSelectorStandardmodal))
    dispatch(setModalProps({ largeVersion, storyId, mainButton }))
    dispatch(showModal())
  }
  if (!loaded) return null;
  return (
    <div
      className={`${styles.bookshelf_button_container} ${shelf ? `added ${styles.added}` : ''}`}
      onClick={shelf ? (e) => handleEntryModalOpen(e, true) : null}
      ref={mainButton}
    >
      {shelf ? (
          <>
            <i className={`fas fa-check ${styles.fa_check}`} />
            <div className={styles.bookshelf_button_added} id={shelf.id}>{shelf.name}</div>
          </>
      ): (
          <>
            <div className={styles.placeholder} />
            <div
              onClick={handleWtrClick}
              className={styles.bookshelf_button} id={wtrId}
            >Want To Read</div>
            <i
              className={`fas fa-chevron-down ${styles.fa_chevron_down}`}
              onClick={(e) => handleEntryModalOpen(e, false)}
            />
          </>
      )}
    </div>
  )
}

export default StoryBookshelfSelector;

// if story.Bookshelves.length > 0
//   div(class='bookshelf-button-container added')
//     i(class='fas fa-check')
//     div(class='bookshelf-button-added' id=story.Bookshelves[0].id) #{story.Bookshelves[0].name}
// else
//   div(class='bookshelf-button-container')
    // div.placeholder
    // div(class='bookshelf-button' id=wantToReadId) Want To Read
    // i(class='fas fa-chevron-down')