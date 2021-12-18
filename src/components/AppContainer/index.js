import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {useDispatch} from 'react-redux';
import {getRequestProfile} from '../../redux/thunks/userThunkAction';

LogBox.ignoreLogs(['Possible Unhandled Promise Rejection (id: 0):']);

export default function AppContainer({children}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequestProfile());
  }, []);
  return <>{children}</>;
}
