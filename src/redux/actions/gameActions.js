export const FETCH_DATA = 'FETCH_DATA';

export const GET_GAME_DETAIL_SUCCESS = 'GET_GAME_DETAIL_SUCCESS';
export const GET_GAME_DETAIL_FAILURE = 'GET_GAME_DETAIL_FAILURE';

export const GET_LIST_GAME_SUCCESS = 'GET_LIST_GAME_SUCCESS';
export const GET_LIST_GAME_FAILURE = 'GET_LIST_GAME_FAILURE';

export const getRequest = () => ({type: FETCH_DATA});

export const getListGameSuccess = listGame => ({
  type: GET_LIST_GAME_SUCCESS,
  payload: listGame,
});

export const getListGameFailure = () => ({type: GET_LIST_GAME_FAILURE});

export const getGameDetailSuccess = game => ({
  type: GET_GAME_DETAIL_SUCCESS,
  payload: game,
});

export const getGameDetailFailure = () => ({type: GET_GAME_DETAIL_FAILURE});
