import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPlacements } from '../../store/placements';

import { hideModal, setCurrentModal } from '../../store/ui';

import BookshelfSelectorStandardModal from './BookshelfSelectorStandardModal';

import styles from './storyModal.module.css'

const BookshelfSelectorCustomModal = () => {
  const dispatch = useDispatch()
  const placements = useSelector(state => state.placements.placements);

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

  const handlePreviousModalClick = (e) => {
    e.preventDefault();
    dispatch(setCurrentModal(BookshelfSelectorStandardModal))
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
        {/* logic for the custom shelves incoming */}
      </div>
      <div className={styles.modal_bottom_button_container}>
        <button
          className={styles.modal_cancel}
          onClick={handlePreviousModalClick} // Use to switch back to modal 1?
        >Back</button>
        <button
          className={styles.modal_submit}
          onClick={(e) => dispatch(hideModal())} // This will be an actual action to finish using the modals
        >Done</button>
      </div>
    </div>
  );
}

export default BookshelfSelectorCustomModal;