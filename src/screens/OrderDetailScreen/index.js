import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import userApi from '../../api/user';
import {BackgroundView, Text} from '../../components';
import useCart from '../../hooks/useCart';
import useNavigation from '../../hooks/useNavigation';
import useUser from '../../hooks/useUser';
import {COLORS} from '../../themes/styles';
import {screenName} from '../../utils/constants';

export default function OrderDetail({route}) {
  const orderId = route.params.id;
  const {orders} = useCart();
  const {dispatchProfile} = useUser();
  const {navigate} = useNavigation();
  const order = orders.find(order => order.id === orderId);
  const cancelOrder = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to remove this beautiful box?',
      [
        {
          text: 'Yes',
          onPress: async () => {
            const res = await userApi.deleteOrder(orderId);
            if (res.statusCode === 200) {
              dispatchProfile();
              navigate(screenName.profile);
            }
          }
        },
        {
          text: 'No'
        }
      ]
    );
  };
  return (
    <>
      <BackgroundView>
        {order.orderDetail.map((p, i) => (
          <View key={i}>
            <Image source={{uri: p.image}} style={styles.image} />
            <View>
              <Text>{p.name}</Text>
            </View>
          </View>
        ))}
      </BackgroundView>
      {order.status === null && (
        <TouchableOpacity style={styles.cancelBtn} onPress={cancelOrder}>
          <Text color={COLORS.white} lg>
            Cancel
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80
  },
  cancelBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.lightRed,
    paddingVertical: 8
  }
});
