import React from 'react';
import {View, Text} from 'react-native';
import useUser from '../../hooks/useUser';

export default function Profile() {
  const {user} = useUser();
  return <View>{user && <Text>{user.email}</Text>}</View>;
}
