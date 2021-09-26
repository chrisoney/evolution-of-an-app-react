import { fetch } from './csrf.js';

const GET_BOOKSHELF = 'bookshelves/getBookshelf';
const GET_ALL_BOOKSHELVES = 'bookshelves/getAllBookshelves';
const REMOVE_BOOKSHELF = 'bookshelves/removeBookshelf';

export const getBookshelf = (bookshelf) => ({
  type: GET_BOOKSHELF,
  payload: bookshelf
})

export const getAllBookshelves = (bookshelves) => ({
  type: GET_ALL_BOOKSHELVES,
  payload: bookshelves
});

export const removeBookshelf = (bookshelfId) => ({
  type: REMOVE_BOOKSHELF,
  payload: bookshelfId
});

export const fetchAllBookshelves = () => async (dispatch) => {
  const res = await fetch('/api/bookshelves');
  dispatch(getAllBookshelves(res.data.bookshelves));
};
export const createNewBookshelf = (userId, name) => async (dispatch) => {
  const res = await fetch('/api/bookshelves', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, name })
  });
  dispatch(getBookshelf(res.data.bookshelf));
  return res.data.bookshelf
};

const initialState = { bookshelves: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_BOOKSHELVES:
      newState = { bookshelves: {} }
      for (let i = 0; i < action.payload.length; i++) {
        const shelf = action.payload[i];
        newState.bookshelves[shelf.id] = shelf
      }
      return newState;
    case GET_BOOKSHELF:
      newState = Object.assign({}, state);
      newState.bookshelves[action.payload.id] = action.payload
      return newState;
    case REMOVE_BOOKSHELF:
      newState = Object.assign({}, state);
      delete newState.bookshelves[action.payload]
      return newState;
    default:
      return state;
  }
}

export default reducer;
