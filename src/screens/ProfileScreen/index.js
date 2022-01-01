import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import useNavigation from '../../hooks/useNavigation';
import useUser from '../../hooks/useUser';
import {screenName} from '../../utils/constants';
import {BackgroundView, ProductItem, Text} from '../../components';
import useCart from '../../hooks/useCart';
import OrderItem from './components/OrderItem';
import useProduct from '../../hooks/useProduct';

export default function Profile() {
  const {isLogin, user, dispatchLogout} = useUser();
  const {orders} = useCart();
  const {favoProducts} = useProduct();
  const {navigate} = useNavigation();
  const logout = () => dispatchLogout();

  if (!isLogin)
    return (
      <>
        <TouchableOpacity onPress={() => navigate(screenName.signIn)}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(screenName.signUp)}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </>
    );

  return (
    <>
      <BackgroundView>
        <Text>{user.email}</Text>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigate(screenName.editProfile)}>
          <Text>Edit Profile</Text>
        </TouchableOpacity> */}

        <View>
          <View>
            <Text>Your Orders</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {orders.map((o, i) => (
              <OrderItem key={i} order={o} />
            ))}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{height: 200}}>
            {favoProducts.map((p, i) => (
              <ProductItem
                key={i}
                product={p}
                isShowCate={false}
                isShowFavoBtn={true}
              />
            ))}
          </ScrollView>
        </View>
      </BackgroundView>
    </>
  );
}
