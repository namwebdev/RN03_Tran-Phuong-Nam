import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import useUser from '../../hooks/useUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useCart from '../../hooks/useCart';

LogBox.ignoreLogs(['Possible Unhandled Promise Rejection (id: 0):']);

export default function AppContainer({children}) {
  const {isFetching, dispatchProfile} = useUser();
  const {dispatchInitCart} = useCart();
  const init = () => {
    try {
      getCartFromStorage();
      dispatchProfile();
    } catch (e) {
      throw e;
    }
  };
  const getCartFromStorage = async () => {
    const data = await AsyncStorage.getItem('cart');
    if (data) dispatchInitCart(JSON.parse(data));
  };

  useEffect(() => {
    init();
  }, []);
  return <>{children}</>;
}
