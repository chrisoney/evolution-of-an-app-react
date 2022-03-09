import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllBookshelves, createNewBookshelf } from '../../store/bookshelves';
import { fetchAllUsers } from '../../store/users';
import { fetchAllStories } from '../../store/stories';
import styles from './bookshelves.module.css';

import Ratings from '../Ratings';
import Loading from '../Loading';

const Bookshelves = (location) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage);
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state => state.users.users);
  const bookshelves = useSelector(state => state.bookshelves.bookshelves);
  const stories = useSelector(state => state.stories.stories);
  const [selected, setSelected] = useState(id === sessionUser.id ? location.location.state.shelf : '');
  const [loaded, setLoaded] = useState(false);
  const [newShelfName, setNewShelfName] = useState('');
  const [pageUser, setPageUser] = useState(null);
  const [allCount, setAllCount] = useState(null);
  const [addShelfReveal, setAddShelfReveal] = useState(false);
  const [loadedShelves, setLoadedShelves] = useState([])
  const [loadedStories, setLoadedStories] = useState([]);

  // useEffect(() => {
  //   if (sessionUser) {
  //     console.log(sessionUser.Bookshelves)
  //     setLoadedShelves([...sessionUser.Bookshelves])
  //   }
  // }, [sessionUser])

  useEffect(() => {
    dispatch(fetchAllUsers()).then(() => {
      dispatch(fetchAllBookshelves()).then(() => {
        dispatch(fetchAllStories()).then(() => {
          setLoaded(true)
        })
      })

    })
  }, [dispatch, id])

  useEffect(() => {
    setPageUser(users[id])
    setLoadedShelves([...Object.values(bookshelves).filter(shelf => shelf.userId === parseInt(id, 10))]);
  }, [users, bookshelves, id])


  useEffect(() => {
    if (pageUser) {
      if (selected === '') {
        const tempArray = []
        const shelves = loadedShelves
        for (let i = 0; i < shelves.length; i++){
          const shelf = shelves[i];
          for (let j = 0; j < shelf.Stories.length; j++){
            const story = shelf.Stories[j]
            if (!tempArray.map(story => story.title).includes(story.title)) {
              tempArray.push(story)
            }
          }
        }
        setLoadedStories([...tempArray])
      } else {
        const temp = loadedShelves.filter(shelf => shelf.name === selected)[0]
        const result = temp ? temp.Stories : [];
        setLoadedStories([...result])
      }
    }
  }, [selected, pageUser, loadedShelves])

  useEffect(() => {
    let total = 0
    for (let i = 0; i < users[parseInt(id, 10)]?.Bookshelves.length; i++) {
      const shelf = users[id].Bookshelves[i];
      if (!shelf.deleteAllowed) {
        total += shelf.Stories.length
      }
    }
    setAllCount(total);
  }, [users, id])

  const handleNewShelfSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewBookshelf(sessionUser.id, newShelfName)).then((shelf) => {
      setNewShelfName('')
      setLoadedShelves([...loadedShelves, shelf])
    })
  }

  if (!loaded) return <Loading />;
  return (
    <div className={styles.page_container}>
      <div className={styles.bookshelf_header}>
        <h3>{parseInt(id, 10) === sessionUser.id ? 'My Stories' : `${users[parseInt(id, 10)].username}'s Stories`}</h3>
      </div>
      <div className={styles.page_content}>
        <div className={styles.sidebar}>
          <h6>
            Bookshelves
            {parseInt(id, 10) === sessionUser.id ? <a href='/bookshelves/edit' className={styles.bookshelf_edit_link}>(edit)</a> : null}
          </h6>
          <div className={styles.bookshelves_container}>
            <div
              className={`${styles.bookshelf_selector} ${selected === '' ? styles.selected : ''}`}
              onClick={()=> setSelected('')}
              id={0}
            >
              All
              {stage >= 3 ? ` (${allCount})` : null}
            </div>
            {loadedShelves.sort((a, b) => a.id - b.id).map(shelf => {
              return (
                <div
                  className={`${styles.bookshelf_selector} ${selected === shelf.name ? styles.selected : ''}`}
                  id={shelf.id}
                  onClick={()=> setSelected(shelf.name)}
                  key={`bookshelf-sidebar-${shelf.id}`}
                >
                  {shelf.name}
                  {stage >= 3 ? ` (${shelf.Stories.length})` : null}
                </div>
              )
            })}
          </div>
          {!addShelfReveal &&
            <button
              className={styles.add_new_bookshelf_button}
              onClick={() => setAddShelfReveal(true)}
            >Add shelf</button>}
          {addShelfReveal && (<div className={`${styles.add_new_bookshelf_form_container}`}>
            <div className={styles.add_new_bookshelf_title}>Add a Shelf:</div>
            <div className={styles.add_new_bookshelf_input_section}>
              <input
                value={newShelfName}
                onChange={(e) => setNewShelfName(e.target.value)}
                type='text' className={styles.add_new_bookshelf_input} />
              <button
                className={styles.add_new_bookshelf_submit_button}
                onClick={handleNewShelfSubmit}
              >add</button>
            </div>
          </div>)}
        </div>
        <div className={styles.main_content}>
          {stage >= 3 && (
            <table className={styles.stories_list_table}>
              <thead>
                <tr>
                  <th>cover</th>
                  <th className={styles.title_header}>title</th>
                  <th>author</th>
                  {stage >= 4 && (
                    <>
                      <th>avg rating</th>
                      <th className={styles.user_rating_header}>rating</th>
                    </>
                  )}
                  <th>shelves</th>
                  <th>date read</th>
                  <th>date added</th>
                </tr>
              </thead>
              <tbody>
                {loadedStories.map((story, idx) => {
                  const newStory = stories[story.id]
                  const userReview = newStory.Reviews.filter(review => review.userId === pageUser.id && review.rating >= 0)[0]
                  return (
                    <tr className={styles.story_row} key={`story-row-${idx}`}>
                      <td>
                        <img src={story.imageUrl} className={styles.image_preview} alt={story.title}/>
                      </td>
                      <td className={styles.story_title}>
                        <a href={`/stories/${story.id}`}>{story.title}</a>
                      </td>
                      <td className={styles.story_author}>{story.author}</td>
                      {/* {stage >= 4 ? () => {
                        let rating;
                        let userId;
                        const userReview = story.Reviews.filter(review => review.userId === pageUser.id && review.rating >= 0)[0]
                        const allReviews = story.Reviews.map(review => review.rating);
                        if (userReview && userReview.rating) {
                          rating = userReview.rating;
                          userId = userReview.userId;
                        } else {
                          rating = 0;
                          userId = parseInt(id, 10)
                        }
                        return (
                          <>
                            <td className={styles.avg_rating}>{Math.round(newStory.Reviews.map(review => review.rating).reduce((a, b) => { return a + b }, 0) / allReviews.length * 100) / 100 || 0}</td>
                            <td>
                              <Ratings rating={rating} userId={userId} />
                            </td>
                          </>
                        )
                      } : null} */}
                      {stage >= 4 && (
                         <>
                          <td className={styles.avg_rating}>{Math.round(newStory.Reviews.map(review => review.rating).reduce((a, b) => { return a + b }, 0) / newStory.Reviews.length * 100) / 100 || 0}</td>
                          <td>
                            <Ratings rating={userReview ? userReview.rating : 0} userId={pageUser.id} storyId={newStory.id} />
                          </td>
                        </>
                      )}
                      <td className={styles.story_shelf_list}>{newStory.Bookshelves.filter(shelf=> shelf.userId === pageUser.id).map(shelf => shelf.name).join(', ')}</td>
                      {newStory.Bookshelves.filter(shelf => shelf.name === 'Read').length > 0 ? (
                        <td className={styles.story_date_added}>{new Date(newStory.Bookshelves.filter(shelf => shelf.name === 'Read')[0].updatedAt).toString().slice(4, 16)}</td>
                        ): (
                          <td className={styles.story_date_read}>Not set</td>
                      )}
                      <td className={styles.story_date_added}>{new Date(story.createdAt).toString().slice(4, 16).slice(0,6) + ',' + new Date(story.createdAt).toString().slice(4, 16).slice(6)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookshelves;

//   .main-content
//     if parseInt(mode) >= 3
//       table(class='stories-list-table')
//         thead
//           tr
//             th cover
//             th.title-header title
//             th author
//             // This number may change based on review completion
//             if parseInt(mode) >= 4
//               th avg rating
//               th.user-rating-header rating
//             th shelves
//             th date read
//             th date added
//         tbody
//           each story in loadedStories
//             tr.story-row
//               td: img(src=story.imageUrl class='image-preview')
//               td.story-title: a(href=`/stories/${story.id}`)=story.title
//               td.story-author=story.author
//               if parseInt(mode) >= 4
//                 -const userReview = story.Reviews.filter(review => review.userId === bookshelfUser.id && review.rating >= 0)[0]
//                 -const allReviews = story.Reviews.map(review => review.rating);
//                 td.avg-rating= Math.round(allReviews.reduce((a,b) => {return a + b }, 0) / allReviews.length * 100) / 100 || 0
//                 td.user-rating-detail
//                   if (userReview && userReview.rating)
//                     div(class='ratings-container' data-story-id=story.id data-current-rating=userReview.rating)
//                       - let i = 0, j = userReview.rating + 1
//                       while i < userReview.rating
//                         span(data-score=(i+1) class=`fas fa-star ${bookshelfUser.id === user.id ? 'user-rating': ''}`)
//                         - i++
//                       while j <= 5
//                         span(data-score=j class=`far fa-star ${bookshelfUser.id === user.id ? 'user-rating': ''}`)
//                         - j++
//                   else
//                     div(class='ratings-container' data-story-id=story.id data-current-rating=0)
//                       - let i = 0
//                       while i < 5
//                         span(data-score=(i+1) class=`far fa-star ${bookshelfUser.id === user.id ? 'user-rating': ''}`)
//                         - i++
              // td.story-shelf-list=story.Bookshelves.map(shelf => shelf.name).join(', ')
              // - const readShelf = story.Bookshelves.filter(shelf => shelf.name === 'Read')
              // if (readShelf.length > 0)
              //   td.story-date-added #{readShelf[0].updatedAt.toString().slice(4, 16)}
              // else
              //   td.story-date-read Not set
              // - var date = story.Placements[0].createdAt.toString().slice(4, 16)
              // td.story-date-added #{date.slice(0,6) + ',' + date.slice(6)}