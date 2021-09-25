import React from 'react';
import { useSelector } from 'react-redux';
import styles from './editBookshelves.module.css';

const EditBookshelves = () => {
  const stage = useSelector(state => state.ui.stage)
  return (
    <div className={styles.bookshelf_edit_page_container}>
      <div className={styles.bookshelf_edit_page_left}>
        
      </div>
      <div className={styles.bookshelf_edit_page_right}>
        <div className={styles.bookshelf_tips_title}>Bookshelf Tips</div>
        <ul class={styles.bookshelf_tips_list}>
          <li className={styles.bookshelf_tips_list_item}>
            <span className={styles.bolded}>editable:</span>
            You may edit this bookshelf's name. You may choose any name that is less than or equal to 30 characters and not already taken by another of your shelves. To start the editing process, click on the
            <i className={`fas fa-check ${styles.example}`} />
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

export default EditBookshelves;

// div(class='bookshelf-edit-page-container')
//     div(class='bookshelf-edit-page-left')
//       div(class='bookshelf-edit-path')
//         div(class='path-no-link') My Profile
//         div(class='path-no-link') >
//         a(href=`/users/${user.id}/bookshelves` class='path-link') My Books
//         div(class='path-no-link') >
//         div(class='path-no-link') Edit Shelves
//       div(class='new-shelf-section')
//         input(type='text' class='new-shelf-input' placeholder='Add a Shelf')
//         button(class='new-shelf-submit') Add
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
//       div(class='lower-bookshelf-buttons')
//         div(class='delete-all') delete all my shelves
//         a(href=`/users/${user.id}/bookshelves` class='backtrack') I'm Done

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