import { fetch } from './csrf.js';

const GET_STORY = 'stories/getStory';
const GET_ALL_STORIES = 'stories/getAllStories';
// const REMOVE_STORY = 'stories/removeStory';

export const getStory = (story) => ({
  type: GET_STORY,
  payload: story
})

export const getAllStories = (stories) => ({
  type: GET_ALL_STORIES,
  payload: stories
});

// export const removeBookshelf = (bookshelfId) => ({
//   type: REMOVE_STORY,
//   payload: bookshelfId
// });

export const fetchAllStories = () => async (dispatch) => {
  const res = await fetch('/api/stories');
  dispatch(getAllStories(res.data.stories));
};

const initialState = { stories: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_STORIES:
      newState = { stories: {} }
      for (let i = 0; i < action.payload.length; i++) {
        const shelf = action.payload[i];
        newState.stories[shelf.id] = shelf
      }
      return newState;
    case GET_STORY:
      newState = Object.assign({}, state);
      newState.stories[action.payload.id] = action.payload
      return newState;
    // case REMOVE_STORY:
    //   newState = Object.assign({}, state);
    //   delete newState.stories[action.payload]
    //   return newState;
    default:
      return state;
  }
}

export default reducer;
