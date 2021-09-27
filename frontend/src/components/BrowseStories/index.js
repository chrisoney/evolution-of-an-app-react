import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect, useLocation } from "react-router-dom";

import { fetchAllTags } from '../../store/tags';

import styles from './browseStories.module.css';

const BrowseStories = ({ preselected }) => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage);
  const sessionUser = useSelector(state => state.session.user);
  const tags = useSelector(state => state.tags.tags);
  const [selected, setSelected] = useState(preselected ? [preselected] : [])
  const [revealTags, setRevealTags] = useState(false);

  // useEffect(() => {
  //   setSelected([...selected, preselected])
  // }, [preselected, selected])

  useEffect(() => {
    dispatch(fetchAllTags())
  }, [dispatch])

  const handleTagSelect = (e) => {
    // placeholder
  }

  return (
    <div className={styles.main_content}>
      <div className={styles.main_content_left}>
        <h1 className={styles.story_browse_title}>Browse Stories</h1>
        {stage >= 5 && (
          <>
            <div
              className={styles.tag_section_reveal_container}
              onClick={() => setRevealTags(!revealTags)}
            >
              <div className={styles.tag_section_reveal}>{revealTags ? 'Close' : 'Filter by Tags'}</div>
            </div>
            {revealTags && (
              <div className={styles.tag_section}>
                {Object.values(tags).map(tag => {
                  return (
                    <div className={styles.tag_container}>
                      <input
                        className={styles.tag_checkbox}
                        type='checkbox'
                        checked={selected.includes(tag.id)}
                        onChange={handleTagSelect}
                        key={`tag-selector-${tag.id}`}
                      />
                      <div className={styles.tag_name}>{tag.name}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
      <div className={styles.main_content_right}></div>
    </div>
  )
}

export default BrowseStories;

// .main-content
//     .main-content-left
//       h1.story_browse_title Browse Stories
//       if (parseInt(mode) >= 5)
//         div(class='hidden selected_tag' id=selectedTag)
//         .tag_section_reveal_container
//           .tag_section_reveal #{selectedTag ? 'Close' : 'Filter by Tags'}
//         div(class=`tag_section ${selectedTag ? '' : 'hidden'}`)
//           for tag in tags
//             .tag_container
//               input(class='tag_checkbox' type='checkbox' checked=(selectedTag === tag.name))
//               .tag_name= tag.name
//       .left_story_container
//         each story in stories
//           a(href=`/stories/${story.id}`)
//             img(src=story.imageUrl class='story_browse_image' title=story.title)
//     .main_content_right
//       h2.story_browse_title Recently Popular Stories
//         .right_story_container
//         each story in newStories
//           a(href=`/stories/${story.id}`)
//             img(src=story.imageUrl class='story_browse_image smaller_image')