import userApi from '../../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProfile} from '../actions/userAction';

export const getRequestProfile = () => {
  return async dispatch => {
    try {
      const {content} = await userApi.getProfile();
      dispatch(getProfile(content));
    } catch (e) {
      await AsyncStorage.removeItem('token');
      throw e;
    }
  };
};
