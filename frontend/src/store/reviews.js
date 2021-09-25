import { fetch } from './csrf.js';

const GET_REVIEW = 'reviews/getReview';
const GET_ALL_REVIEWS = 'reviews/getAllReviews';
const REMOVE_REVIEW = 'reviews/removeReview';

export const getReview = (review) => ({
  type: GET_REVIEW,
  payload: review
})

export const getAllReviews = (reviews) => ({
  type: GET_ALL_REVIEWS,
  payload: reviews
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  payload: reviewId
});

export const fetchAllReviews = () => async (dispatch) => {
  const res = await fetch('/api/reviews');
  dispatch(getAllReviews(res.data.reviews));
};

export const createOrUpdateReview = (review) => async (dispatch) => {
  const res = await fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  dispatch(getReview(res.data.review));
}

const initialState = { reviews: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_REVIEWS:
      newState = { reviews: {} }
      for (let i = 0; i < action.payload.length; i++) {
        const shelf = action.payload[i];
        newState.reviews[shelf.id] = shelf
      }
      return newState;
    case GET_REVIEW:
      newState = Object.assign({}, state);
      newState.reviews[action.payload.id] = action.payload
      return newState;
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState.reviews[action.payload]
      return newState;
    default:
      return state;
  }
}

export default reducer;
