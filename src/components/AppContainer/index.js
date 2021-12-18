import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import useUser from '../../hooks/useUser';

LogBox.ignoreLogs(['Possible Unhandled Promise Rejection (id: 0):']);

export default function AppContainer({children}) {
  const {user, isLogin, dispatchProfile} = useUser();

  useEffect(() => {
    dispatchProfile();
  }, []);
  return <>{children}</>;
}
