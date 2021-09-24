import { fetch } from './csrf.js';

const GET_USER = 'users/getUser';
const GET_ALL_USERS = 'users/getAllUsers';
const REMOVE_USER = 'users/removeUser';

export const getUser = (user) => ({
  type: GET_USER,
  payload: user
})

export const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  payload: users
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId
});

export const fetchAllUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');
  dispatch(getAllUsers(res.data.users));
};

const initialState = { users: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_USERS:
      newState = { users: {} }
      for (let i = 0; i < action.payload.length; i++) {
        const shelf = action.payload[i];
        newState.users[shelf.id] = shelf
      }
      return newState;
    case GET_USER:
      newState = Object.assign({}, state);
      newState.users[action.payload.id] = action.payload
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      delete newState.users[action.payload]
      return newState;
    default:
      return state;
  }
}

export default reducer;
