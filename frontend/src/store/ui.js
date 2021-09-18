const SET_STAGE = 'ui/setStage';
const REMOVE_STAGE = 'ui/removeStage';

export const setStage = (stage) => ({
  type: SET_STAGE,
  payload: stage
});

export const removeStage = () => ({
  type: REMOVE_STAGE
});

const initialState = { stage: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_STAGE:
      newState = Object.assign({}, state, { stage: action.payload });
      return newState;
    case REMOVE_STAGE:
      newState = Object.assign({}, state, { stage: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
