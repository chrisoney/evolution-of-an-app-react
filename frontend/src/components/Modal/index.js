import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { hideModal } from '../../store/ui';

import styles from './modal.module.css';

const Modal = () => {
  const dispatch = useDispatch()
  const mount = useSelector(state => state.ui.modal.mount);
  const Current = useSelector(state => state.ui.modal.current);
  const display = useSelector(state => state.ui.modal.display);

  const closeModal = (e) => {
    dispatch(hideModal())
  }

  return mount && display && ReactDOM.createPortal(
    <div className={styles.modal_background} onClick={closeModal}>
      <div
        className={styles.modal_content}
        onClick={e => e.stopPropagation()}
      >
        <Current />
      </div>
    </div>
  , mount);
}

export default Modal;