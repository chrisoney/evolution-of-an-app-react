import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import { getStage, setStage, setCurrentModal, showModal } from './store/ui';

import Navigation from "./components/Navigation";
import PageNotMade from './components/AlternativePages/PageNotMade';
import FourOhFour from './components/AlternativePages/FourOhFour';
import Footer from './components/Footer';
import StageSelector from "./components/StageSelector";
import Modal from './components/Modal';

import Home from "./components/Home";
import Bookshelves from "./components/Bookshelves";
import EditBookshelves from "./components/Bookshelves/EditBookshelves";
import BrowseStories from './components/BrowseStories';
import StoryPage from './components/StoryPage';
import Search from './components/Search';
import Instructions from "./components/Modal/Instructions";


import ProtectedRoute from "./components/utils/ProtectedRoute";
import { Helmet } from 'react-helmet-async'

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const stage = useSelector(state =>  state.ui.stage)
  useEffect(() => {
    dispatch(getStage())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  useEffect(() => {
    if (stage === null && isLoaded) {
      dispatch(setStage(0));
      dispatch(setCurrentModal(Instructions))
      dispatch(showModal())
    }
  }, [dispatch, stage, isLoaded])

  return (
    <>
      <Helmet>
        {stage === 0 ? <link rel="icon" type="image/ico" href="favicon.ico" sizes="16x16" /> : <link rel="icon" type="image/ico" href="favicon2.ico" sizes="16x16" />}
      </Helmet>
      <Modal />
      <Navigation isLoaded={isLoaded} />
      <StageSelector />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <ProtectedRoute path="/stories" exact min={4}>
            <BrowseStories />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:id/bookshelves" min={2}>
            <Bookshelves />
          </ProtectedRoute>
          <ProtectedRoute path="/bookshelves/edit" min={2}>
            <EditBookshelves />
          </ProtectedRoute>
          <ProtectedRoute path="/stories/:id" min={3}>
            <StoryPage />
          </ProtectedRoute>
          <ProtectedRoute path="/search" min={6}>
            <Search />
          </ProtectedRoute>
          <Route path='/page-not-made'>
            <PageNotMade location={location} />
          </Route>
          <Route path='/four-oh-four'>
            <FourOhFour />
          </Route>
          <Route path='/'>
            <Redirect to='/four-oh-four' />
          </Route>
        </Switch>
      )}
      {stage > 0 && <Footer />}
    </>
  );
}

export default App;
