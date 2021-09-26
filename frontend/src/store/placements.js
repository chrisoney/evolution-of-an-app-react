import { fetch } from './csrf.js';

const GET_PLACEMENT = 'placements/getPlacement';
const GET_ALL_PLACEMENTS = 'placements/getAllPlacements';
const REMOVE_PLACEMENT = 'placements/removePlacement';

export const getPlacement = (placement) => ({
  type: GET_PLACEMENT,
  payload: placement
})

export const getAllPlacements = (placements) => ({
  type: GET_ALL_PLACEMENTS,
  payload: placements
});

export const removePlacement = (placementId) => ({
  type: REMOVE_PLACEMENT,
  payload: placementId
});

export const fetchAllPlacements = () => async (dispatch) => {
  const res = await fetch('/api/placements');
  dispatch(getAllPlacements(res.data.placements));
};

export const addOrUpdatePlacement = (bookshelfId, storyId, userId) => async (dispatch) => {
  const res = await fetch('/api/placements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ bookshelfId, storyId, userId })
  })
  dispatch(getPlacement(res.data.placement));
  return res.data.placement;
}

const initialState = { placements: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_PLACEMENTS:
      newState = { placements: {} }
      for (let i = 0; i < action.payload.length; i++) {
        const shelf = action.payload[i];
        newState.placements[shelf.id] = shelf
      }
      return newState;
    case GET_PLACEMENT:
      newState = Object.assign({}, state);
      newState.placements[action.payload.id] = action.payload
      return newState;
    case REMOVE_PLACEMENT:
      newState = Object.assign({}, state);
      delete newState.placements[action.payload]
      return newState;
    default:
      return state;
  }
}

export default reducer;
