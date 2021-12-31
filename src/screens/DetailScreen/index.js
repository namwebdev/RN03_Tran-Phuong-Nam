import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  BackgroundView,
  CategoryItem,
  FavoriteButton,
  ProductItem,
  Text
} from '../../components';
import useCart from '../../hooks/useCart';
import useNavigation from '../../hooks/useNavigation';
import useProduct from '../../hooks/useProduct';
import useUser from '../../hooks/useUser';
import {COLORS} from '../../themes/styles';
import {screenName} from '../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import userApi from '../../api/user';

export default function Detail({route}) {
  const productId = route.params.id;
  const {product, isFetching, dispatchProductDetail} = useProduct(productId);
  const {dispatchAddProduct} = useCart();
  const {isLogin} = useUser();
  const {navigate} = useNavigation();
  const [activeSize, setActiveSize] = useState('');

  useEffect(() => {
    dispatchProductDetail(productId);
  }, [route]);

  const handleFavoProduct = () => {
    userApi
      .like(productId)
      .then(() => {
        Alert.alert('Thông báo', 'Đã thêm vào danh sách yêu thích');
      })
      .catch(err => {
        console.error(err.response);
      });
  };

  const addToCartHanlder = () => {
    if (isLogin) {
      dispatchAddProduct(product, '41');
      Alert.alert('ok');
      return;
    }

    navigate(screenName.signIn, {screen: screenName.detail, id: productId});
  };

  return (
    <>
      {isFetching && <Text>Loading...</Text>}
      {product && (
        <>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: product.image}} />
            </View>
            <BackgroundView>
              <Text>{product.name}</Text>
              {product.categories.map(cate => (
                <CategoryItem key={cate.id} category={cate.category} />
              ))}
              <Text sm>{product.description}</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {product.size.map(size => (
                  <TouchableOpacity
                    onPress={() => setActiveSize(size)}
                    key={size}
                    style={[
                      styles.sizeItem,
                      activeSize === size && styles.sizeActive
                    ]}>
                    <Text
                      color={activeSize === size ? COLORS.white : COLORS.black}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Text>Related Product</Text>
              <View style={styles.relatedProduct}>
                {product.relatedProducts.map(product => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    isShowCate={false}
                  />
                ))}
              </View>
            </BackgroundView>
          </ScrollView>
          <View style={styles.bottomBtns}>
            {isLogin && <FavoriteButton product={product} size={30} />}
            <TouchableOpacity onPress={addToCartHanlder}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>
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
  },
  sizeItem: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    width: 40,
    height: 20
  },
  sizeActive: {
    backgroundColor: 'blue'
  },
  relatedProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 50
  },
  bottomBtns: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'gray',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  }
});
