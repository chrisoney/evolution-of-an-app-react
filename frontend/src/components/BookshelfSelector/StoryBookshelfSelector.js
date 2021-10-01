import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './bookshelfSelector.module.css';

// Work on this next
const StoryBookshelfSelector = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [shelved, setShelved] = useState(false)

  return (
    <>
      
    </>
  );
}

export default StoryBookshelfSelector;

// if story.Bookshelves.length > 0
//   div(class='bookshelf-button-container added')
//     i(class='fas fa-check')
//     div(class='bookshelf-button-added' id=story.Bookshelves[0].id) #{story.Bookshelves[0].name}
// else
//   div(class='bookshelf-button-container')
//     div.placeholder
//     div(class='bookshelf-button' id=wantToReadId) Want To Read
//     i(class='fas fa-chevron-down')