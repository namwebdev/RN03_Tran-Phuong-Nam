import React, {useState} from 'react';
import userApi from '../../api/user';
import {Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {getRequestProfile} from '../../redux/thunks/userThunkAction';

export default function SignIn() {
  const [email, setEmail] = useState('123');
  const [password, setPassword] = useState('123');
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const res = await userApi.login(email, password);
      const token = res?.content?.accessToken;
      if (token) {
        await AsyncStorage.setItem('token', token);
        dispatch(getRequestProfile());
        navigate(screenName.home);
      }
    } catch (e) {
      console.error('login', e);
    }
  };
  return (
    <TouchableOpacity onPress={login}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
}
