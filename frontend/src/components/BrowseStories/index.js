import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect, useLocation } from "react-router-dom";

import { fetchAllTags } from '../../store/tags';
import { fetchAllStories } from '../../store/stories';

import styles from './browseStories.module.css';

const BrowseStories = ({location}) => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage);
  const preselected = location.state ? [location.state.selectedTag] : []
  console.log(location.state, preselected)
  // const sessionUser = useSelector(state => state.session.user);
  const tags = useSelector(state => state.tags.tags);
  const stories = useSelector(state => state.stories.stories);
  const [selected, setSelected] = useState(preselected)
  const [revealTags, setRevealTags] = useState(preselected.length > 0);
  const [loadedStories, setLoadedStories] = useState([])
  const [recentStories, setRecentStories] = useState([])

  // useEffect(() => {
  //   setSelected([...selected, preselected])
  // }, [preselected, selected])

  const storyTagHelper = (story, tags) => {
    for (let i = 0; i < tags.length; i++){
      const tagId = tags[i];
      if (!story.Tags.map(tag => tag.id).includes(tagId)) return false;
    }
    return true;
  }

  useEffect(() => {
    console.log(selected)
    const storyArr = Object.values(stories)
    if (selected.length === 0 || stage < 5) setLoadedStories([...Object.values(stories)])
    else {
      const tempStories = []
      for (let i = 0; i < storyArr.length; i++){
        const story = storyArr[i];
        if (storyTagHelper(story, selected) && !tempStories.map(story => story.id).includes(story.id)) tempStories.push(story);
      }
      setLoadedStories([...tempStories])
    }
    setRecentStories([...storyArr.filter(story => story.Bookshelves.length > 0).sort((a,b) => a.Bookshelves[0].Placement.updatedAt - b.Bookshelves[0].Placement.updatedAt).slice(0,15)])
  }, [stories, selected, stage])

  useEffect(() => {
    dispatch(fetchAllTags()).then(() => {
      dispatch(fetchAllStories())
    })
  }, [dispatch])

  const handleTagSelect = (e, tagId) => {
    console.log('hello')
    if (selected.includes(tagId)) {
      const idx = selected.indexOf(tagId);
      setSelected([...selected.slice(0, idx), ...selected.slice(idx + 1)])
      // const checkbox = e.currentTarget.querySelector("input[type='checkbox']")
      // checkbox.checked = !checkbox.checked;
    } else {
      console.log('not there')
      setSelected([...selected, tagId])
    }
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
                    <div
                      className={styles.tag_container}
                      key={`tag-selector-${tag.id}`}
                      value={tag.id}
                      onClick={(e) => handleTagSelect(e, tag.id)}
                    >
                      <input
                        className={styles.tag_checkbox}
                        type='checkbox'
                        checked={selected.includes(tag.id)}
                        readOnly
                        onChange={null}
                      />
                      <div className={styles.tag_name}>{tag.name}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
        <div className={styles.left_story_container}>
          {loadedStories.map(story => {
            return (
              <a href={`/stories/${story.id}`} key={`main-story-section-${story.id}`}>
                <img src={story.imageUrl} className={styles.story_browse_image} title={story.title} alt={story.title} />
              </a>
            )
          })}
        </div>
      </div>
      <div className={styles.main_content_right}>
        <h2 className={styles.story_browse_title}>Recently Popular Stories</h2>
        <div className={styles.right_story_container}>
          {recentStories.map(story => {
            return (
              <a href={`/stories/${story.id}`} key={`recent-story-section-${story.id}`}>
                <img src={story.imageUrl} className={`${styles.story_browse_image} ${styles.smaller_image}`} alt={story.title} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BrowseStories;
