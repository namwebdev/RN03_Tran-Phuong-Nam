import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {BackgroundView, Text} from '../../components';
import useProduct from '../../hooks/useProduct';

export default function Detail({route}) {
  const productId = route.params.id;
  const {product, isFetching, dispatchProductDetail} = useProduct(productId);
  useEffect(() => {
    dispatchProductDetail(productId);
  }, []);

  return (
    <>
      {isFetching && <Text>Loading...</Text>}
      {product && (
        <>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: product.image}} />
          </View>
          <BackgroundView>
            <Text>{product.name}</Text>
          </BackgroundView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: 350
  }
});
