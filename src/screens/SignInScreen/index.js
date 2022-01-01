import React, {useEffect, useState} from 'react';
import userApi from '../../api/user';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {REGEX_EMAIL, screenName} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {getRequestProfile} from '../../redux/thunks/userThunkAction';
import useUser from '../../hooks/useUser';
import {AuthContainer, Text, Input} from '../../components';
import {COLORS} from '../../themes/styles';

export default function SignIn({route}) {
  const {isLogin} = useUser();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const login = async () => {
    const isValidate = email && password;
    if (isValidate) {
      try {
        const res = await userApi.login(email, password);
        const token = res?.content?.accessToken;
        if (token) {
          await AsyncStorage.setItem('token', token);
          dispatch(getRequestProfile());

          if (route.params?.screen) {
            const {screen, id} = route.params;
            navigate(screen, id && {id});
            return;
          }
          navigate(screenName.home);
        }
      } catch (e) {
        if (e.response.data.statusCode === 404) {
          Alert.alert(e.response.data.message);
        }
      }
      return;
    }
    Alert.alert('Please enter email and password');
  };

  useEffect(() => {
    if (isLogin) navigate(screenName.home);
  }, []);

  return (
    <AuthContainer>
      <Input
        id="email"
        label="Email"
        required
        errorText="Email is required"
        onInputChange={setEmail}
        outlined
        borderColor="blue"
      />
      <Input
        label="Password"
        keyboardType="default"
        required
        autoCapitalize="sentences"
        errorText="Password is required"
        onInputChange={setPassword}
        outlined
        borderColor="blue"
      />
      <TouchableOpacity style={[styles.loginBtn]} onPress={login}>
        <Text bold color={COLORS.white}>
          Login
        </Text>
      </TouchableOpacity>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: 'blue',
    width: 60,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  disabled: {
    backgroundColor: '#74b9ff',
    opacity: 0.5
  }
});
