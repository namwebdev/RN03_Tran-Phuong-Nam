import userApi from '../../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProfile, logout as logoutAction} from '../actions/userAction';

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

export const logout = () => {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(logoutAction());
    } catch (e) {
      throw e;
    }
  };
};
