import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import useProduct from '../../hooks/useProduct';

export default function Detail({route}) {
  const productId = route.params.id;
  const {product, dispatchProductDetail} = useProduct(productId);

  useEffect(() => {
    dispatchProductDetail(productId);
  }, []);
  return <View>{product && <Text>{product.name}</Text>}</View>;
}
