import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

import { showModal, setCurrentModal } from '../../store/ui';

function LoginFormModal() {
  const dispatch = useDispatch()

  const openLoginForm = (e) => {
    e.preventDefault()
    dispatch(setCurrentModal(LoginForm));
    dispatch(showModal())
  }

  return (
    <>
      <button
        onClick={openLoginForm}
      >Log In</button>
    </>
  );
}

export default LoginFormModal;