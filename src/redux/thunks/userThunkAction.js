import userApi from '../../api/user';
import {getProfile} from '../actions/userAction';

export const getRequestProfile = () => {
  return async dispatch => {
    try {
      const {content} = await userApi.getProfile();
      dispatch(getProfile(content));
    } catch (e) {
      if (e.status !== 401) {
        throw e;
      }
    }
  };
};
