import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


function PageNotMade({location}) {
  const stage = useSelector(state => state.ui.stage)
  console.log(location)
  const referrer = location.state.referrer;
  const requiredStage = location.state.requiredStage;
  console.log(requiredStage)
  if (stage >= requiredStage) return <Redirect to={referrer} />
  return <div>Page not made!</div>;
}

export default PageNotMade;