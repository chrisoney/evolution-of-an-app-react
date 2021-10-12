import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPlacements } from '../../store/placements';
import { hideModal } from '../../store/ui';

import styles from './storyModal.module.css'

const BookshelfSelectorRemoveModal = () => {
  const dispatch = useDispatch()
  const placements = useSelector(state => state.placements.placements);

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_title_container}>
        <div className={styles.modal_title}>Are you sure you want to remove this book from your shelves? </div>
        <div
          className={styles.close_button_container}
          onClick={(e) => dispatch(hideModal())}
        >
          <i className={`fas fa-times close-modal ${styles.fa_times} ${styles.close_modal}`} />
        </div>
      </div>
      <div className={styles.modal_description}>Removing this book will clear associated reading activity.</div>
      <div className={styles.modal_bottom_button_container}>
        <button
          className={styles.modal_cancel}
          onClick={null} // Use to switch back to modal 1?
        >Cancel</button>
        <button
          className={styles.modal_submit}
          onClick={null} // This will be an actual action to delete it from existing bookshelves
        >Remove</button>
      </div>
    </div>
  );
}

export default BookshelfSelectorRemoveModal;