import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './search.module.css';

const Search = () => {
  const [searchPageInput, setSearchPageInput] = useState('');
  const [filter, setFilter] = useState('')
  return (
    <div className={styles.search_page_parent_container}>
      <div className={styles.search_page_container}>
        <div className={styles.search_page_title}>Search</div>
        <form className={styles.search_page_form}>
          <div className={styles.search_form_top_bar}>
            <input type='text'
              className={styles.search_page_input}
              value={searchPageInput}
              placeholder="Search by Story Title, Author, or Description"
              onChange={(e) => setSearchPageInput(e.target.value)}
            />
            <button type='submit' className={styles.search_page_submit}>Search</button>
          </div>
          <div className={styles.search_page_options}>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='all'
                value='all'
                className={styles.radio_input}
                checked={filter === 'all'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='all'>all</label>
            </div>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='title'
                value='title'
                className={styles.radio_input}
                checked={filter === 'title'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='title'>title</label>
            </div>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='author'
                value='author'
                className={styles.radio_input}
                checked={filter === 'author'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='author'>author</label>
            </div>
            <div className={styles.radio_container}>
              <input
                type='radio'
                name='filter'
                id='description'
                value='description'
                className={styles.radio_input}
                checked={filter === 'description'}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label htmlFor='description'>description</label>
            </div>
          </div>
        </form>
        <div className={styles.search_page_story_section}>

        </div>
      </div>
    </div>
  )
}

export default Search;