const SET_STAGE = 'ui/setStage';
const REMOVE_STAGE = 'ui/removeStage';
const GET_STAGE = 'ui/getStage';
const SHOW_MODAL = 'ui/showModal';
const HIDE_MODAL = 'ui/hideModal';
const SET_CURRENT = 'ui/setCurrent'
const SET_MOUNT = 'ui/setMount'

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

export const showModal = () => ({
  type: SHOW_MODAL
})

export const hideModal = () => ({
  type: HIDE_MODAL
})

export const setCurrentModal = (currentModal) => ({
  type: SET_CURRENT,
  payload: currentModal
})

export const setModalMount = (mount) => ({
  type: SET_MOUNT,
  payload: mount
})

const initialState = {
  stage: null,
  modal: {
    mount: null,
    current: null,
    display: false
  }
};

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
    case SHOW_MODAL:
      return {
        ...state, modal: {
          ...state.modal,
          display: true
      }}
    case HIDE_MODAL:
      return {
        ...state, modal: {
          ...state.modal,
          display: false
      }}
    case SET_CURRENT:
      return {
        ...state, modal: {
          ...state.modal,
          current: action.payload
      }}
    case SET_MOUNT:
      return {
        ...state, modal: {
          ...state.modal,
          mount: action.payload
      }}
    default:
      return state;
  }
}

export default reducer;
