import {getListGame, getGameDetail} from '../../api';
import {mapIP} from '../../utils/common';
import {
  getGameDetailFailure,
  getGameDetailSuccess,
  getListGameFailure,
  getListGameSuccess,
  getRequest,
} from '../actions/gameActions';

export const getRequestListGame = () => {
  return dispatch => {
    dispatch(getRequest());
    getListGame()
      .then(res => {
        const listGame = mapIP(res.data);
        dispatch(getListGameSuccess(listGame));
      })
      .catch(err => {
        dispatch(getListGameFailure());
        console.log(error);
      });
  };
};

export const getRequestGameDetail = id => {
  return async dispatch => {
    try {
      const res = await getGameDetail(id);
      const game = mapIP(res.data);
      dispatch(getGameDetailSuccess(game));
    } catch (error) {
      dispatch(getGameDetailFailure());
      console.log(error);
    }
  };
};
