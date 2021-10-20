import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPlacements, removeAllUserPlacements } from '../../store/placements';
import { hideModal, setCurrentModal } from '../../store/ui';

import BookshelfSelectorStandardModal from './BookshelfSelectorStandardModal';

import styles from './storyModal.module.css'

const BookshelfSelectorRemoveModal = () => {
  const dispatch = useDispatch()
  // const placements = useSelector(state => state.placements.placements);
  const sessionUser = useSelector(state => state.session.user)
  const props = useSelector(state => state.ui.modal.props);

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

  const handleModalSwitchStandard = (e) => {
    e.preventDefault();
    dispatch(setCurrentModal(BookshelfSelectorStandardModal))
  }

  const handleRemoveAllAction = (e) => {
    e.preventDefault()
    dispatch(removeAllUserPlacements(sessionUser.id, props.storyId))
    dispatch(hideModal())
  }

  return (
    <div
      className={styles.modal_container}
      // onClick={e => e.stopPropagation()}
    >
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
          onClick={handleModalSwitchStandard} // Use to switch back to modal 1?
        >Cancel</button>
        <button
          className={styles.modal_submit}
          onClick={handleRemoveAllAction} // This will be an actual action to delete it from existing bookshelves
        >Remove</button>
      </div>
    </div>
  );
}

export default BookshelfSelectorRemoveModal;