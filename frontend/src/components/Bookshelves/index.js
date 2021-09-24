import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllBookshelves } from '../../store/bookshelves';
import { fetchAllUsers } from '../../store/users';
import styles from './bookshelves.module.css';

const Bookshelves = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage);
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state => state.users.users);
  const bookshelves = useSelector(state => state.bookshelves.bookshelves);

  const [selected, setSelected] = useState('');
  const [loaded, setLoaded] = useState(false)
  const [pageUser, setPageUser] = useState(null)
  const [allCount, setAllCount] = useState(null)
  const [addShelfReveal, setAddShelfReveal] = useState(false)

  useEffect(() => {
    dispatch(fetchAllUsers()).then(() => {
      dispatch(fetchAllBookshelves()).then(() => {
        setLoaded(true)  
      })

    })
  }, [dispatch, id])

  useEffect(() => {
    let total = 0
    for (let i = 0; i < users[parseInt(id, 10)]?.Bookshelves.length; i++){
      const shelf = users[id].Bookshelves[i];
      total += shelf.Stories.length
    }
    setAllCount(total)
  }, [users, id])

  useEffect(() => {
    setPageUser(users[id])
  }, [users, id])
  if (!loaded) return null;
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
            <div className={`${styles.bookshelf_selector} ${selected === '' ? styles.selected : ''}`} id={0}>
              All
              {stage >= 3 ? ` (${allCount})` : null}
            </div>
            {pageUser.Bookshelves.map(shelf => {
              return (
                <div className={`${styles.bookshelf_selector} ${selected === shelf.name ? styles.selected : ''}`} id={shelf.id} key={`bookshelf-sidebar-${shelf.id}`}>
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
              <input type='text' className={styles.add_new_bookshelf_input} />
              <button className={styles.add_new_bookshelf_submit_button}>add</button>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default Bookshelves;

// .bookshelf-header
//   h3 #{user.id === bookshelfUser.id ? 'My Stories' : `${user.username}'s Stories`}
// .page-content
//   .sidebar
//     h6 Bookshelves
//       if bookshelfUser.id === user.id
//         a(href='/bookshelves/edit' class='bookshelf-edit-link') (edit)
//     div(class='bookshelves-container')
      // div(class=`bookshelf-selector ${selected === '' ? 'selected' : ''}` id=0 data-user-id=bookshelfUser.id) All 
      //   if parseInt(mode) >= 3
      //     |(#{allCount})
      // each bookshelf in bookshelfUser.Bookshelves
      //   div(class=`bookshelf-selector ${selected === bookshelf.name ? 'selected' : ''}` id=bookshelf.id) #{bookshelf.name} 
      //     if parseInt(mode) >= 3
      //       |(#{bookshelf.Stories.length})

    // button(class="add-new-bookshelf-button") Add shelf
    // div(class='add-new-bookshelf-form-container hidden')
    //   div(class='add-new-bookshelf-title') Add a Shelf:
    //   div(class='add-new-bookshelf-input-section')
    //     input(type='text' class='add-new-bookshelf-input')
    //     button(class='add-new-bookshelf-submit-button') add
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
//               td.story-shelf-list=story.Bookshelves.map(shelf => shelf.name).join(', ')
//               - const readShelf = story.Bookshelves.filter(shelf => shelf.name === 'Read')
//               if (readShelf.length > 0)
//                 td.story-date-added #{readShelf[0].updatedAt.toString().slice(4, 16)}
//               else
//                 td.story-date-read Not set
//               - var date = story.Placements[0].createdAt.toString().slice(4, 16)
//               td.story-date-added #{date.slice(0,6) + ',' + date.slice(6)}