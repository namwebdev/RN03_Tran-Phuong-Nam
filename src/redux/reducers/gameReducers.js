import {
  FETCH_DATA,
  GET_GAME_DETAIL_FAILURE,
  GET_GAME_DETAIL_SUCCESS,
  GET_LIST_GAME_SUCCESS,
  GET_LIST_GAME_FAILURE,
} from '../actions/gameActions';

const initialState = {
  listGame: [],
  gameDetail: {},
  isFetching: false,
};

const gameReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_DATA:
      return {...state, isFetching: true};
    case GET_LIST_GAME_SUCCESS:
      return {...state, listGame: payload, isFetching: false};
    case GET_LIST_GAME_FAILURE:
      return {...state, isFetching: false};

    case GET_GAME_DETAIL_SUCCESS:
      return {...state, gameDetail: payload, isFetching: false};
    case GET_GAME_DETAIL_FAILURE:
      return {...state, isFetching: false};
    default:
      return state;
  }
};

export default gameReducer;
