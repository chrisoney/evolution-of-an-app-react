import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import { getStage } from './store/ui';

import Navigation from "./components/Navigation";
import StageSelector from "./components/StageSelector";
import Home from "./components/Home";
import BrowseStories from './components/BrowseStories';
import PageNotMade from './components/PageNotMade';

import ProtectedRoute from "./components/utils/ProtectedRoute";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const stage = useSelector(state =>  state.ui.stage)
  useEffect(() => {
    dispatch(getStage())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
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
          <ProtectedRoute path="/stories" min={3}>
            <BrowseStories />
          </ProtectedRoute>
          <Route path='/four-oh-four'>
            <PageNotMade location={location} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
