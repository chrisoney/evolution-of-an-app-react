import { fetch } from './csrf.js';

const GET_TAG = 'tags/getTag';
const GET_ALL_TAGS = 'tags/getAllTags';
const REMOVE_TAG = 'tags/removeTag';

export const getTag = (tag) => ({
  type: GET_TAG,
  payload: tag
})

export const getAllTags = (tags) => ({
  type: GET_ALL_TAGS,
  payload: tags
});

export const removeTag = (tagId) => ({
  type: REMOVE_TAG,
  payload: tagId
});

export const fetchAllTags = () => async (dispatch) => {
  const res = await fetch('/api/tags');
  dispatch(getAllTags(res.data.tags));
};

const initialState = { tags: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_TAGS:
      newState = { tags: {} }
      for (let i = 0; i < action.payload.length; i++) {
        const shelf = action.payload[i];
        newState.tags[shelf.id] = shelf
      }
      return newState;
    case GET_TAG:
      newState = Object.assign({}, state);
      newState.tags[action.payload.id] = action.payload
      return newState;
    case REMOVE_TAG:
      newState = Object.assign({}, state);
      delete newState.tags[action.payload]
      return newState;
    default:
      return state;
  }
}

export default reducer;
