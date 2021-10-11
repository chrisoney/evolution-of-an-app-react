import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPlacements } from '../../store/placements';

import styles from './storyModal.module.css'

const BookshelfSelectorRemoveModal = () => {
  const dispatch = useDispatch()
  const placements = useSelector(state => state.placements.placements);

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

  return (
    <div className={styles.modal_container}>
    </div>
  );
}

export default BookshelfSelectorRemoveModal;