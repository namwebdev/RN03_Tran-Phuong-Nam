import userApi from '../../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchingData,
  getProfile,
  logout as logoutAction
} from '../actions/userAction';
import {clearCart, initOrders} from '../actions/cartAction';
import {getFavoriteProducts} from './productThunkAction';

export const getRequestProfile = (isGetFavoProduct = true) => {
  return async dispatch => {
    dispatch(fetchingData());
    try {
      const {content} = await userApi.getProfile();
      dispatch(getProfile(content));
      if (content?.ordersHistory)
        dispatch(initOrders(content.ordersHistory.reverse()));
      if (isGetFavoProduct) dispatch(getFavoriteProducts());
    } catch (e) {
      await AsyncStorage.clear();
      throw e;
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      await AsyncStorage.clear();
      dispatch(logoutAction());
      dispatch(clearCart());
    } catch (e) {
      throw e;
    }
  };
};
