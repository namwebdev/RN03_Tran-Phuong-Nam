import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import useNavigation from '../../../hooks/useNavigation';
import {getParsedDate} from '../../../utils';
import {screenName} from '../../../utils/constants';

export default function OrderItem({order}) {
  const {orderDetail, date} = order;
  const {navigate} = useNavigation();
  const remainingProduct =
    orderDetail.length > 1 ? orderDetail.length - 1 : null;
  const parseDate = getParsedDate(date);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate(screenName.orderDetail, {id: order.id});
      }}>
      <View style={styles.imagesContainer}>
        <View>
          <Image source={{uri: orderDetail[0].image}} style={styles.image} />
          <Text xs>{orderDetail[0].name}</Text>
        </View>
      </View>
      {!!remainingProduct && (
        <View>
          <Text>+{remainingProduct}</Text>
        </View>
      )}
      <View>
        <Text>{parseDate}</Text>
      </View>
      <Text>View details</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: 250
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {width: 65, height: 65}
});
