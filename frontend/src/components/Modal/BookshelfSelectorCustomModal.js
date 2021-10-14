import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPlacements } from '../../store/placements';

import { hideModal } from '../../store/ui';

import styles from './storyModal.module.css'

const BookshelfSelectorStandardModal = () => {
  const dispatch = useDispatch()
  const placements = useSelector(state => state.placements.placements);

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

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
    </div>
  );
}

export default BookshelfSelectorStandardModal;