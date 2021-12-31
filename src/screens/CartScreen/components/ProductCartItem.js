import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import useProduct from '../../../hooks/useProduct';
import {COLORS} from '../../../themes/styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import useCart from '../../../hooks/useCart';

export default function ProductCartItem(props) {
  const {listProduct} = useProduct();
  const {dispatchAddProduct, dispatchSubtractProduct, dispatchRemoveProduct} =
    useCart();
  const product = listProduct.find(p => p.id === props.product.productId);

  const removeProduct = () => {
    dispatchRemoveProduct(product.id);
  };
  const subtractQuantity = () => {
    dispatchSubtractProduct(props.product);
  };
  const addQuantity = () => {
    dispatchAddProduct(product, props.product.size);
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: product.image}}
      />

      <View>
        <View style={styles.contentItemContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <TouchableOpacity onPress={removeProduct} style={styles.icon}>
            <FeatherIcon name="trash" color="#f0f" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentItemContainer}>
          <Text style={styles.name}>{product.price}</Text>
          <View style={styles.icon}>
            <TouchableOpacity onPress={subtractQuantity}>
              <FeatherIcon name="minus" color="#f0f" size={30} />
            </TouchableOpacity>
            <View>
              <Text>{props.product.quantity}</Text>
            </View>
            <TouchableOpacity onPress={addQuantity}>
              <AntDesignIcon name="plus" color="#f0f" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {width: 140, height: 100},
  contentItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  name: {},
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
