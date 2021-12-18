import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function Profile() {
  const user = useSelector(state => state.userReducer.user);
  return <View>{user && <Text>{user.email}</Text>}</View>;
}
