import React from 'react';
import { useSelector } from "react-redux";
// import { Redirect, useLocation } from "react-router-dom";

const  BrowseStories = () => {
  const sessionUser = useSelector(state => state.session.user);
  // let currentLocation = useLocation();
  // if (stage < 3) {
  //   return <Redirect push 
  //             to={{
  //               pathname: "/four-oh-four",
  //               state: {
  //                 referrer: currentLocation.pathname,
  //                 requiredStage: 3
  //               }
  //             }}
  //           />
  // }

  return <div>Hello this is the browse stories page!</div>;
}

export default BrowseStories;