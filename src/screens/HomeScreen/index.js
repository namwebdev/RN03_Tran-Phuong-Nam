import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../components';
import useProduct from '../../hooks/useProduct';
import {screenName} from '../../utils/constants';

export default function Home() {
  const {listProduct, isFetching, dispatchListProduct} = useProduct();
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatchListProduct();
  }, []);

  if (isFetching) return <Text>Loading...</Text>;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigate(screenName.signIn);
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
      {listProduct.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigate(screenName.detail, {id: item.id})}>
          <Text bold>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
