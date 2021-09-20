const SET_STAGE = 'ui/setStage';
const REMOVE_STAGE = 'ui/removeStage';
const GET_STAGE = 'ui/getStage';

export const getStage = () => ({
  type: GET_STAGE
})

export const setStage = (stage) => ({
  type: SET_STAGE,
  payload: stage
});

export const removeStage = () => ({
  type: REMOVE_STAGE
});

const initialState = { stage: 0 };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_STAGE:
      const stage = parseInt(localStorage.getItem('stage'), 10) || 0;
      newState = Object.assign({}, state, { stage });
      return newState;
    case SET_STAGE:
      localStorage.setItem( 'stage', action.payload );
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
