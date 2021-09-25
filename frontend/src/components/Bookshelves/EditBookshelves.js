import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './editBookshelves.module.css';

const EditBookshelves = () => {
  const stage = useSelector(state => state.ui.stage)
  const sessionUser = useSelector(state => state.session.user)
  return (
    <div className={styles.bookshelf_edit_page_container}>
      <div className={styles.bookshelf_edit_page_left}>
        <div className={styles.bookshelf_edit_path}>
          <div className={styles.path_no_link}>My Profile</div>
          <div className={styles.path_no_link}>{'>'}</div>
          <a href={`/users/${sessionUser.id}/bookshelves`} className={styles.path_link}>My Books</a>
          <div className={styles.path_no_link}>{'>'}</div>
          <div className={styles.path_no_link}>Edit Shelves</div>
        </div>
        <div className={styles.new_shelf_section}>
          <input type='text' className={styles.new_shelf_input} placeholder='Add a Shelf' />
          <button className={styles.new_shelf_submit}>Add</button>
        </div>
        <table className={styles.shelf_table}>
          <thead>
            <tr>
              <th></th>
              <th>shelf</th>
              <th>editable</th>
              {stage >= 3 && <th>stories</th>}
            </tr>
          </thead>
          <tbody>
            {sessionUser.Bookshelves.map((shelf, idx) => {
              const queryVar = shelf.name.split(' ').join('-');
              return (
                <BookshelfEditRow shelf={shelf} queryVar={queryVar} key={`bookshelf-edit-row-${idx}`}/>
                // <tr className={styles.shelf_row} data-editable={`${shelf.deleteAllowed ? true : false}`} data-shelf-id={shelf.id}>
                //   <td className={styles.delete_shelf_container}>
                //     <i class={`fas fa-times ${styles.delete_shelf} ${shelf.deleteAllowed ? styles.allow : ''}`} id={shelf.id} />
                //   </td>
                //   <td className={styles.shelf_name}></td>
                //     <a href={`/users/${sessionUser.id}/bookshelves?selected=${queryVar}`} className={styles.shelf_link}>
                //       <div>{shelf.name}</div>
                //     {/* Need to hide here */}
                //     <div className={styles.shelf_name_update_container}>
                //       <input type='text' className={styles.shelf_name_update_input} value={shelf.name} />
                //       <button className={styles.shelf_name_update_submit} id={shelf.id}>Save</button>
                //       <button className={styles.shelf_name_update_cancel}>Cancel</button>
                //     </div>
                //   </a>
                //   <td className={styles.editable_container}>
                //     <i class={`editable fas ${shelf.deleteAllowed ? 'fa-check' + styles.fa_check : 'fa-times' + styles.fa_times}`} />
                //   </td>
                //   {stage >= 3 && (
                //     <td className={styles.story_count_container}>
                //       <div className={styles.story_count}>{shelf.Stories.length}</div>
                //     </td>
                //   )}
                // </tr>
              )
            })}
          </tbody>
        </table>
        <div className={styles.lower_bookshelf_buttons}>
          <div className={styles.delete_all}>delete all my shelves</div>
          <a href={`/users/${sessionUser.id}/bookshelves`} className={styles.backtrack}>I'm Done</a>
        </div>
      </div>
      <div className={styles.bookshelf_edit_page_right}>
        <div className={styles.bookshelf_tips_title}>Bookshelf Tips</div>
        <ul className={styles.bookshelf_tips_list}>
          <li className={styles.bookshelf_tips_list_item}>
            <span className={styles.bolded}>editable:</span>
            You may edit this bookshelf's name. You may choose any name that is less than or equal to 30 characters and not already taken by another of your shelves. To start the editing process, click on the
            <i className={`fas fa-check ${styles.fa_check} ${styles.example}`} />
            icon. This icon can also be used to cancel the editing process.
          </li>
          {stage >= 3 && (
            <li className={styles.bookshelf_tips_list_item}>
              <span className={styles.bolded}>stories:</span>
              The number of stories that are currently in each shelf. Clicking this does nothing
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

const BookshelfEditRow = ({ shelf, queryVar }) => {
  const stage = useSelector(state => state.ui.stage);
  const [reveal, setReveal] = useState()
  return (
    <tr className={styles.shelf_row} data-editable={`${shelf.deleteAllowed ? true : false}`} data-shelf-id={shelf.id}>
      <td className={styles.delete_shelf_container}>
        <i className={`fas fa-times ${styles.delete_shelf} ${shelf.deleteAllowed ? styles.allow : ''}`} id={shelf.id} />
      </td>
      <td className={styles.shelf_name}>
        <div
          // href={`/users/${sessionUser.id}/bookshelves?selected=${queryVar}`}
          // Onclick should be the reveal
          className={styles.shelf_link}
        >
          {!reveal && <div>{shelf.name}</div>}
          {reveal && <div className={styles.shelf_name_update_container}>
            <input type='text' className={styles.shelf_name_update_input} value={shelf.name} />
            <button className={styles.shelf_name_update_submit} id={shelf.id}>Save</button>
            <button
              className={styles.shelf_name_update_cancel}
              onClick={() => setReveal(!reveal)}
            >Cancel</button>
          </div>}
        </div>
      </td>
      <td className={styles.editable_container}>
        <i
          className={`${styles.editable} fas ${shelf.deleteAllowed ? `fa-check ${styles.fa_check}` : `fa-times ${styles.fa_times}`}`}
          onClick={shelf.deleteAllowed ? () => setReveal(!reveal) : null}
        />
      </td>
      {stage >= 3 && (
        <td className={styles.story_count_container}>
          <div className={styles.story_count}>{shelf.Stories.length}</div>
        </td>
      )}
    </tr>
  )
}

export default EditBookshelves;

// div(class='bookshelf-edit-page-container')
//     div(class='bookshelf-edit-page-left')
      // div(class='bookshelf-edit-path')
      //   div(class='path-no-link') My Profile
      //   div(class='path-no-link') >
      //   a(href=`/users/${user.id}/bookshelves` class='path-link') My Books
      //   div(class='path-no-link') >
      //   div(class='path-no-link') Edit Shelves
      // div(class='new-shelf-section')
      //   input(type='text' class='new-shelf-input' placeholder='Add a Shelf')
      //   button(class='new-shelf-submit') Add
//       table(class="shelf-table")
//         thead
//           tr
//             th
//             th shelf
//             th editable
//             if parseInt(mode) > 2
//               th stories
//         tbody
//           each shelf in bookshelves
//             tr(class='shelf-row' data-editable=`${shelf.deleteAllowed ? true : false}` data-shelf-id=shelf.id)
//               td(class='delete-shelf-container')
//                 i(class=`fas fa-times delete-shelf ${shelf.deleteAllowed ? 'allow' : ''}` id=shelf.id)
//               td(class='shelf-name')
//                 -const queryVar = shelf.name.split(' ').join('-');
//                 a(href=`/users/${user.id}/bookshelves?selected=${queryVar}` class="shelf-link")
//                   div=shelf.name
//                 div(class='shelf-name-update-container hidden')
//                   input(type='text' class='shelf-name-update-input' value=shelf.name)
//                   button(class='shelf-name-update-submit' id=shelf.id) Save
//                   button(class='shelf-name-update-cancel') Cancel
//               td(class="editable-container")
//                 i(class=`editable fas ${shelf.deleteAllowed ? 'fa-check' : 'fa-times'}`)
//               if parseInt(mode) > 2
//                 td(class='story-count-container')
//                   div(class='story-count')= shelf.Stories.length
      // div(class='lower-bookshelf-buttons')
      //   div(class='delete-all') delete all my shelves
      //   a(href=`/users/${user.id}/bookshelves` class='backtrack') I'm Done

//     div(class='bookshelf-edit-page-right')
      // div(class='bookshelf-tips-title') Bookshelf Tips
      // ul(class='bookshelf-tips-list')
      //   li(class='bookshelf-tips-list-item')
      //     span.bolded editable:
      //     | You may edit this bookshelf's name. You may choose any name that is less than or equal to 30 characters and not already taken by another of your shelves. To start the editing process, click on the
      //     i(class='fas fa-check example')
      //     | icon. This icon can also be used to cancel the editing process.
      //   if parseInt(mode) > 2
      //     li(class='bookshelf-tips-list-item')
      //       span.bolded stories:
      //       | The number of stories that are currently in each shelf. Clicking this does nothing