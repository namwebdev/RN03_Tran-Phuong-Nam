import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import userApi from '../../api/user';
import {BackgroundView, Text} from '../../components';
import useCart from '../../hooks/useCart';
import useUser from '../../hooks/useUser';
import ProductCartItem from './components/ProductCartItem';

export default function Profile() {
  const {cart, dispatchClearCart} = useCart();
  const {user, dispatchProfile} = useUser();
  const [cartInfo, setCartInfo] = useState({
    price: 0,
    count: 0
  });
  const [loading, setLoading] = useState(false);
  const checkout = async () => {
    setLoading(true);
    try {
      const formData = {
        orderDetail: cart,
        email: user.email
      };
      const res = await userApi.order(formData);
      if (res.statusCode === 200) {
        dispatchProfile();
        dispatchClearCart();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cart) {
      const price = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
      const count = cart.reduce((acc, i) => acc + i.quantity, 0);
      setCartInfo({price, count});
    }
  }, [cart]);
  return (
    <BackgroundView>
      <Text>Your Cart</Text>
      {cart && (
        <View>
          {cart.map((p, i) => (
            <ProductCartItem key={i} product={p} />
          ))}
        </View>
      )}
      <View>
        <View>
          <Text>Total price:</Text>
          {cart && (
            <>
              <Text>${cartInfo.price}</Text>
              <Text>Items({cartInfo.count})</Text>
            </>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={checkout}>
        <Text>Checkout</Text>
      </TouchableOpacity>
    </BackgroundView>
  );
}
