import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ModalProvider } from './context/Modal';
import { HelmetProvider } from 'react-helmet-async'
import App from './App';

import configureStore from './store';
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/session';
import { setModalMount } from './store/ui';
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

// const Carrot = () => (
//   <div style={{ color: "orange", fontSize: "100px" }}>
//     <i className="fas fa-carrot"></i>
//   </div>
// );

function Root() {
  const dispatch = useDispatch()
  const modalRef = useRef(null);

  useEffect(() => {
    console.log(modalRef.current)
    dispatch(setModalMount(modalRef.current))
  }, [dispatch])
  return (
    <HelmetProvider>
      <BrowserRouter>
        <App />
        {/* <Carrot /> */}
        <div className='modal' ref={modalRef} />
      </BrowserRouter>
    </HelmetProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
