import { fetch } from './csrf.js';

const GET_PLACEMENT = 'placements/getPlacement';
const GET_ALL_PLACEMENTS = 'placements/getAllPlacements';
const REMOVE_PLACEMENT = 'placements/removePlacement';
const REMOVE_MULTIPLE_PLACEMENTS = 'placements/removeMultiplePlacements';

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

export const removeMultiplePlacements = (placementIds) => ({
  type: REMOVE_MULTIPLE_PLACEMENTS,
  payload: placementIds
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
  const deletedIds = res.data.deletedIds
  if (deletedIds.length > 0) {
    for (let i = 0; i < deletedIds.length; i++){
      dispatch(removePlacement(deletedIds[i]));
    }
  }
  dispatch(getPlacement(res.data.placement));
  return res.data.placement;
}

export const removeAllUserPlacements = (userId, storyId) => async (dispatch) => {
  const res = await fetch(`/api/placements`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, storyId })
  })
  // const deletedIds = res.data.deletedIds
  dispatch(removeMultiplePlacements(res.data.deletedIds))
  // if (deletedIds.length > 0) {
  //   for (let i = 0; i < deletedIds.length; i++){
  //     dispatch(removePlacement(deletedIds[i]));
  //   }
  // }
  return;
}

export const removeOnePlacement = (placementId) => async (dispatch) => {
  const res = await fetch(`/api/placements/${placementId}`, {
    method: 'DELETE'
  })
  dispatch(removePlacement(res.data.placementId))
  return;
}

const initialState = { placements: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_PLACEMENTS:
      newState = { placements: {} }
      for (let i = 0; i < action.payload.length; i++) {
        const placement = action.payload[i];
        newState.placements[placement.id] = placement
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
    case REMOVE_MULTIPLE_PLACEMENTS:
      newState = Object.assign({}, state);
      for (let i = 0; i < action.payload.length; i++) {
        delete newState.placements[action.payload[i]]
      }
      return newState;
    default:
      return state;
  }
}

export default reducer;
