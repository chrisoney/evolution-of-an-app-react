import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user);
  const sessionLoaded = useSelector(state => state.session.loaded);
  const stage = useSelector(state => state.ui.stage);
  console.log(stage, props)
  console.log(stage < props.min)
  let currentLocation = useLocation();
  return (
    <Route {...props}>
      {(sessionLoaded && user)
        ? (stage < props.min)
          ? <Redirect push
            to={{
              pathname: "/four-oh-four",
              state: {
                referrer: currentLocation.pathname,
                requiredStage: props.min
              }
            }}
          />
          : props.children
        : (sessionLoaded && !user)
          ? <Redirect to='/'/>
          : null}
  </Route>
  )
};


export default ProtectedRoute;