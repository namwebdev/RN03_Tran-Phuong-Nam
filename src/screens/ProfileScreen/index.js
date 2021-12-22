import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import useNavigation from '../../hooks/useNavigation';
import useUser from '../../hooks/useUser';
import {screenName} from '../../utils/constants';
import {Text} from '../../components';

export default function Profile() {
  const {isLogin, user, dispatchLogout} = useUser();
  const {navigate} = useNavigation();

  const logout = () => dispatchLogout();

  return (
    <View>
      {!isLogin && (
        <TouchableOpacity onPress={() => navigate(screenName.signIn)}>
          <Text>Login</Text>
        </TouchableOpacity>
      )}
      {user && <Text>{user.email}</Text>}
      {isLogin && (
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
