import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { addOrUpdatePlacement } from '../../store/placements'
import { fetchAllBookshelves } from '../../store/bookshelves'
import { hideModal, setCurrentModal } from '../../store/ui';

import BookshelfSelectorRemoveModal from './BookshelfSelectorRemoveModal';
import BookshelfSelectorCustomModal from './BookshelfSelectorCustomModal';

import styles from './storyModal.module.css';

const BookshelfSelectorStandardModal = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const props = useSelector(state => state.ui.modal.props);
  const placements = useSelector(state => Object.values(state.placements.placements).filter(placement => placement.storyId === props.storyId))
  const bookshelves = useSelector(state => state.bookshelves.bookshelves);
  const userShelves = useSelector(state => Object.values(state.bookshelves.bookshelves).filter(shelf => shelf.userId === sessionUser.id && !shelf.deleteAllowed).sort((a,b) => a.id - b.id))
  const [selected, setSelected] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const userIds = userShelves.map(shelf => shelf.id)
    const userPlacements = placements.filter(placement => userIds.includes(placement.bookshelfId))
    const shelfName = bookshelves[userPlacements[0]?.bookshelfId]?.name
    setSelected(shelfName)
  }, [placements, userShelves, bookshelves])


  useEffect(() => {
    dispatch(fetchAllBookshelves()).then(() => {
      setLoaded(true)
    })
  }, [dispatch])

  const handleBookshelfSelect = (e, largeMode, shelfName) => {
    e.preventDefault()
    e.stopPropagation()
    setLoaded(false)
    dispatch(addOrUpdatePlacement(e.target.id, props.storyId, sessionUser.id)).then(() => {
      setLoaded(true)
    })
    if (!largeMode) dispatch(hideModal())
    if (props.mainButton.current.classList.contains('added')) {
      props.mainButton.current.children[1].innerText = shelfName;
    }
    setSelected(shelfName)
  }

  const handleRemoveModalSwitch = (e) => {
    e.preventDefault()
    // e.stopPropagation()
    dispatch(setCurrentModal(BookshelfSelectorRemoveModal));
  }
  const handleCustomModalSwitch = (e) => {
    e.preventDefault()
    // e.stopPropagation()
    dispatch(setCurrentModal(BookshelfSelectorCustomModal));
  }

  if (!props.largeVersion || !props.storyId) return <p>Did something go wrong?</p>
  // if (!loaded) return <img className={styles.loading_gif} src='/images/loading.gif' alt='loading'/>
  if (!loaded) return null
  return (
    <div
      className={styles.modal_container}
      // onClick={e => e.stopPropagation()}
    >
      <div className={styles.modal_title_container}>
        <div className={styles.modal_title}>Choose a shelf for this story: </div>
        <div
          className={styles.close_button_container}
          onClick={(e) => dispatch(hideModal())}
        >
          <i className={`fas fa-times close-modal ${styles.fa_times} ${styles.close_modal}`} />
        </div>
      </div>
      {userShelves.map(shelf => {
        return (
          <button
            className={`${styles.modal_bookshelf_button} ${selected === shelf.name ? styles.selected : ''}`}
            id={shelf.id}
            data-close={props.largeVersion}
            onClick={(e) => handleBookshelfSelect(e, props.largeVersion, shelf.name)}
          >
            {selected === shelf.name && <i className={`fas fa-check ${styles.fa_check}`} />}
            {shelf.name}
          </button>
        )
      })}
      {props.largeVersion && (
        <div className={styles.modal_bottom_button_container}>
          <button
            className={styles.modal_cancel}
            onClick={handleRemoveModalSwitch} // This will be movement to the delete modal
          >Remove</button>
          <button
            className={styles.modal_submit}
            onClick={handleCustomModalSwitch} // This will be movement to the custom shelves modal
          >Next</button>
        </div>
      )}
    </div>
  )

}

export default BookshelfSelectorStandardModal;
