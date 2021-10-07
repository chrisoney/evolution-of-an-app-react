import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPlacements } from '../../store/placements';

const BookshelfSelectorStandardModal = () => {
  const dispatch = useDispatch()
  const placements = useSelector(state => state.placements.placements);

  useEffect(() => {
    dispatch(fetchAllPlacements())
  }, [dispatch])

  return (
    <>
    </>
  );
}

export default BookshelfSelectorStandardModal;