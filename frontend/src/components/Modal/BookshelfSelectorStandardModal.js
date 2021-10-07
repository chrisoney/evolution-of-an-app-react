import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { addOrUpdatePlacement } from '../../store/placements'
import { fetchAllBookshelves } from '../../store/bookshelves'
import { hideModal } from '../../store/ui';

import styles from './storyModal.module.css';

const BookshelfSelectorStandardModal = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const props = useSelector(state => state.ui.modal.props);
  const placements = useSelector(state => Object.values(state.placements.placements).filter(placement => placement.storyId === props.storyId))
  const bookshelves = useSelector(state => state.bookshelves.bookshelves);
  const userShelves = useSelector(state => Object.values(state.bookshelves.bookshelves).filter(shelf => shelf.userId === sessionUser.id && !shelf.deleteAllowed).sort((a,b) => a.id - b.id))
  const [selected, setSelected] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const userIds = userShelves.map(shelf => shelf.id)
    const userPlacements = placements.filter(placement => userIds.includes(placement.bookshelfId))
    const shelfName = bookshelves[userPlacements[0]?.bookshelfId]?.name
    setSelected(shelfName)
  }, [placements, userShelves, bookshelves])


  useEffect(() => {
    dispatch(fetchAllBookshelves()).then(() => {
      setLoaded(true)
    })
  }, [dispatch])

  const handleBookshelfSelect = (e, largeMode, shelfName) => {
    e.preventDefault()
    e.stopPropagation()
    setLoaded(false)
    dispatch(addOrUpdatePlacement(e.target.id, props.storyId, sessionUser.id)).then(() => {
      setLoaded(true)
    })
    if (!largeMode) dispatch(hideModal())
    if (props.mainButton.current.classList.contains('added')) {
      props.mainButton.current.children[1].innerText = shelfName;
    }
    setSelected(shelfName)
  }
  if (!props.largeVersion || !props.storyId) return <p>Did something go wrong?</p>
  // if (!loaded) return <img className={styles.loading_gif} src='/images/loading.gif' alt='loading'/>
  if (!loaded) return null
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_title_container}>
        <div className={styles.modal_title}>Choose a shelf for this story: </div>
        <div
          className={styles.close_button_container}
          onClick={(e) => dispatch(hideModal())}
        >
          <i className={`fas fa-times close-modal ${styles.fa_times} ${styles.close_modal}`} />
        </div>
      </div>
      {userShelves.map(shelf => {
        return (
          <button
            className={`${styles.modal_bookshelf_button} ${selected === shelf.name ? styles.selected : ''}`}
            id={shelf.id}
            data-close={props.largeVersion}
            onClick={(e) => handleBookshelfSelect(e, props.largeVersion, shelf.name)}
          >
            {selected === shelf.name && <i className={`fas fa-check ${styles.fa_check}`} />}
            {shelf.name}
          </button>
        )
      })}
    </div>
  )

}

export default BookshelfSelectorStandardModal;

//   const titleContainer = document.createElement('div')
//   titleContainer.className = 'modal-title-container';
//   const title = document.createElement('div');
//   title.className = 'modal-title';
//   title.innerText = 'Choose a shelf for this story: ';
//   titleContainer.appendChild(title);
//   const closeButtonContainer = document.createElement('i');
//   closeButtonContainer.className = 'close-button-container';
//   closeButtonContainer.addEventListener('click', closeModal)
//   const closeButton = document.createElement('i');
//   closeButton.className = 'fas fa-times close-modal';
//   closeButtonContainer.appendChild(closeButton);
//   titleContainer.appendChild(closeButtonContainer);
//   result.push(titleContainer);
  
//   const wantToRead = document.createElement('button');
//   wantToRead.className = 'modal-bookshelf-button';
//   wantToRead.id = data['Want To Read'].id;
//   wantToRead.innerText = 'Want To Read';
//   if (large) {
//     wantToRead.addEventListener('click', switchShelfHelperEvent)
//     if( data['Want To Read'].Stories.length > 0) {
//       wantToRead.classList.add('selected');
//       wantToRead.innerHTML = '<i class="fas fa-check"></i>' + wantToRead.innerHTML;
//     }
//   }  else {
//     wantToRead.addEventListener('click', selectBookshelf)
//   }
//   result.push(wantToRead);

//   const currentlyReading = document.createElement('button');
//   currentlyReading.className = 'modal-bookshelf-button';
//   currentlyReading.id = data['Currently Reading'].id;
//   currentlyReading.innerText = 'Currently Reading';
//   if (large) {
//     currentlyReading.addEventListener('click', switchShelfHelperEvent)
//     if (data['Currently Reading'].Stories.length > 0) {
//       currentlyReading.classList.add('selected');
//       currentlyReading.innerHTML = '<i class="fas fa-check"></i>' + currentlyReading.innerHTML;
//     }
//   } else {
//     currentlyReading.addEventListener('click', selectBookshelf)
//   }
//   result.push(currentlyReading);

//   const alreadyRead = document.createElement('button');
//   alreadyRead.className = 'modal-bookshelf-button';
//   alreadyRead.id = data['Read'].id;
//   alreadyRead.innerText = 'Read';
//   if (large) {
//     alreadyRead.addEventListener('click', switchShelfHelperEvent)
//     if(data['Read'].Stories.length > 0) {
//       alreadyRead.classList.add('selected');
//       alreadyRead.innerHTML = '<i class="fas fa-check"></i>' + alreadyRead.innerHTML;
//     }
//   } else {
//     alreadyRead.addEventListener('click', selectBookshelf)
//   }
//   result.push(alreadyRead);

//   if (large) {
//     const bottomButtonContainer = document.createElement('div');
//     bottomButtonContainer.className = 'modal-bottom-button-container';
//     const cancelButton = document.createElement('button');
//     cancelButton.className = 'modal-cancel';
//     cancelButton.innerText = 'Remove';
//     cancelButton.addEventListener('click', removeAllWarningEvent);
//     bottomButtonContainer.appendChild(cancelButton);
//     const submitButton = document.createElement('button');
//     submitButton.className = 'modal-submit';
//     submitButton.innerText = 'Next';
//     submitButton.addEventListener('click', customShelfModalDisplayEvent);
//     bottomButtonContainer.appendChild(submitButton);
//     result.push(bottomButtonContainer);
//   }

//   return result;