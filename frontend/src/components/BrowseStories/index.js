import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Redirect, useLocation } from "react-router-dom";

const  BrowseStories = ({ preselected }) => {
  const sessionUser = useSelector(state => state.session.user);
  const [selected, setSelected] = useState([preselected])

  useEffect(() => {
    setSelected([...selected, preselected])
  }, [preselected, selected])

  const toggleSelected = (e) => {
    // placeholder
  }

  return (
    null
  )
}

export default BrowseStories;