import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  return (
    <div className={}>

    </div>
  )
}

export default Search;

// .search-page-parent-container
//     .search-page-container
//       .search-page-title Search
//       form(method='GET' action='/search' class='search-page-form')
//         .search-form-top-bar
//           input(type='text' name='term' class='search-page-input' placeholder="Search by Story Title, Author, or Description")
//           button(type='submit' class='search-page-submit') Search
//         .search-page-options
//           .radio-container
//             input(type='radio' name='filter' id='all' value='all' checked)
//             label(for='all') all
//           .radio-container
//             input(type='radio' name='filter' id='title' value='title')
//             label(for='title') title
//           .radio-container
//             input(type='radio' name='filter' id='author' value='author')
//             label(for='author') author
//           .radio-container
//             input(type='radio' name='filter' id='description' value='description')
//             label(for='description') description
//       .search-page-story-section