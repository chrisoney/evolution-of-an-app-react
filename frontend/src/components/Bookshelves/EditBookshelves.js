import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './editBookshelves.module.css';

import {
  updateBookshelf,
  createNewBookshelf,
  annihilateBookshelf,
  annihilateCustomBookshelves
} from '../../store/bookshelves';

const EditBookshelves = () => {
  const dispatch = useDispatch();
  const stage = useSelector(state => state.ui.stage);
  const sessionUser = useSelector(state => state.session.user);
  const [loadedShelves, setLoadedShelves] = useState(sessionUser.Bookshelves);
  const [newShelfName, setNewShelfName] = useState('');

  const handleNewShelfSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewBookshelf(sessionUser.id, newShelfName)).then((shelf) => {
      setNewShelfName('')
      setLoadedShelves([...loadedShelves, shelf])
    })
  }

  const handleDeleteAllCustom = (e) => {
    const ans = window.confirm("This will delete all your shelves. This will only delete non-exclusive shelves. Are you sure?")
    if (!ans) return;
    dispatch(annihilateCustomBookshelves(sessionUser.id))
    setLoadedShelves([...loadedShelves.filter(shelf => !shelf.deleteAllowed)])
    // for (let i = 0; i < ids.length; i++){
    //   let id = ids[i];

    // }
  }

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
          <input
            type='text'
            className={styles.new_shelf_input}
            placeholder='Add a Shelf'
            value={newShelfName}
            onChange={(e) => setNewShelfName(e.target.value)}
          />
          <button
            className={styles.new_shelf_submit}
            onClick={handleNewShelfSubmit}
          >Add</button>
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
            {loadedShelves.map((shelf, idx) => {
              return (
                <BookshelfEditRow shelf={shelf} key={`bookshelf-edit-row-${idx}`}/>
              )
            })}
          </tbody>
        </table>
        <div className={styles.lower_bookshelf_buttons}>
          <div
            className={styles.delete_all}
            onClick={handleDeleteAllCustom}
          >delete all my shelves</div>
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

const BookshelfEditRow = ({ shelf }) => {
  const dispatch = useDispatch()
  const stage = useSelector(state => state.ui.stage);
  const [reveal, setReveal] = useState()
  const [name, setName] = useState(shelf.name)

  const handleSubmit = (e) => {
    dispatch(updateBookshelf(shelf.id, name))
    setReveal(!reveal)
  }

  const handleCancel = (e) => {
    setName(shelf.name);
    setReveal(!reveal);
  }

  const handleDelete = (e) => {
    dispatch(annihilateBookshelf(shelf.id))
  }

  return (
    <tr className={styles.shelf_row} data-editable={`${shelf.deleteAllowed ? true : false}`} data-shelf-id={shelf.id}>
      <td className={styles.delete_shelf_container}>
        <i
          className={`fas fa-times ${styles.delete_shelf} ${shelf.deleteAllowed ? styles.allow : ''}`}
          id={shelf.id}
          onClick={handleDelete}
        />
      </td>
      <td className={styles.shelf_name}>
        <div
          // href={`/users/${sessionUser.id}/bookshelves?selected=${queryVar}`}
          className={styles.shelf_link}
        >
          {!reveal && <div>{name}</div>}
          {reveal && <div className={styles.shelf_name_update_container}>
            <input
              type='text'
              className={styles.shelf_name_update_input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className={styles.shelf_name_update_submit}
              onClick={handleSubmit}
              id={shelf.id}
            >Save</button>
            <button
              className={styles.shelf_name_update_cancel}
              onClick={handleCancel}
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
