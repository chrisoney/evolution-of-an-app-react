import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPlacements } from '../../store/placements';

import { hideModal, setCurrentModal } from '../../store/ui';

import BookshelfSelectorStandardModal from './BookshelfSelectorStandardModal';

import styles from './storyModal.module.css'

const BookshelfSelectorCustomModal = () => {
  const dispatch = useDispatch()
  const placements = useSelector(state => state.placements.placements);
  const bookshelves = useSelector(state => state.bookshelves.bookshelves);
  const sessionUser = useSelector(state => state.session.user);
  const props = useSelector(state => state.ui.modal.props);

  const [customShelves, setCustomShelves] = useState([]);
  const [selectedShelves, setSelectedShelves] = useState([])

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

  useEffect(() => {
    setCustomShelves([...sessionUser.Bookshelves.filter(shelf => shelf.deleteAllowed).map(shelf => bookshelves[shelf.id])])
  }, [sessionUser, bookshelves])


  useEffect(() => {
    const userShelves = customShelves.map(shelf => shelf.id);
    const tempShelves = Object.values(placements).filter(placement => userShelves.indexOf(placement.bookshelfId) !== -1 && placement.storyId === props.storyId).map(placement => placement.bookshelfId);
    setSelectedShelves(tempShelves);
  }, [placements, sessionUser, customShelves, props])

  const handlePreviousModalClick = (e) => {
    e.preventDefault();
    dispatch(setCurrentModal(BookshelfSelectorStandardModal))
  }

  const customShelfClickEvent = (e, id) => {
    e.preventDefault()
    console.log(Array.isArray(selectedShelves));
    const idx = selectedShelves.indexOf(id)
    if (idx === -1) {
      setSelectedShelves([...selectedShelves, id])
    } else {
      setSelectedShelves([...selectedShelves.slice(0, idx), ...selectedShelves.slice(idx + 1)]);
    }
  }

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_title_container}>
        <div className={styles.modal_title}>Add this story to some of your custom shelves: </div>
        <div
          className={styles.close_button_container}
          onClick={(e) => dispatch(hideModal())}
        >
          <i className={`fas fa-times close-modal ${styles.fa_times} ${styles.close_modal}`} />
        </div>
      </div>
      <div className={styles.modal_shelf_container}>
        {customShelves.map(shelf => {
          const selected = selectedShelves.indexOf(shelf.id) !== -1;
          return (
            <div
              className={`${styles.modal_custom_shelf} ${selected ? styles.selected : ''}`}
              key={`custom-shelf-${shelf.id}`}
              onClick={(e) => customShelfClickEvent(e, shelf.id)}
            >{shelf.name}</div>
          )
        })}
        {/* logic for the custom shelves incoming */}
      </div>
      <div className={styles.modal_bottom_button_container}>
        <button
          className={styles.modal_cancel}
          onClick={handlePreviousModalClick}
        >Back</button>
        <button
          className={styles.modal_submit}
          onClick={(e) => dispatch(hideModal())}
        >Done</button>
      </div>
    </div>
  );
}

export default BookshelfSelectorCustomModal;