import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Avatar, BackgroundView, ProductItem, Text} from '../../components';
import useProduct from '../../hooks/useProduct';
import CategoryItem from './components/CategoryItem';

export default function Home() {
  const {
    listProduct,
    categories,
    isFetching,
    dispatchListProduct,
    dispatchCategories
  } = useProduct();
  const [activeCate, setActiveCate] = useState(null);
  const [products, setProducts] = useState([]);
  const productsRef = useRef();

  const onSelectCategory = category => {
    const categoryAcative = category.id === activeCate?.id ? null : category;
    setActiveCate(categoryAcative);
    productsRef.current.scrollToOffset({animated: true, offset: 0});
  };

  useEffect(() => {
    dispatchCategories();
    dispatchListProduct();
  }, []);

  useEffect(() => {
    let products;
    if (activeCate) {
      const productIds = JSON.parse(activeCate.productList);
      products = listProduct.filter(product => productIds.includes(product.id));
    } else {
      products = listProduct;
    }
    setProducts(products);
  }, [activeCate, listProduct]);

  if (isFetching) return <Text>Loading...</Text>;

  return (
    <BackgroundView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text xxxl bold>
          ZShop
        </Text>
        <Avatar />
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <CategoryItem
              onPress={() => onSelectCategory(item)}
              isActive={activeCate?.id === item.id}
              category={item}
            />
          )}
          ItemSeparatorComponent={() => <View style={{width: 30}} />}
          contentContainerStyle={{paddingVertical: 10}}
        />
      </View>

      {/* Product */}
      <View style={styles.productContainer}>
        <FlatList
          ref={productsRef}
          data={products}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <ProductItem product={item} />}
          contentContainerStyle={{
            paddingBottom: 90,
            width: 380
          }}
        />
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productContainer: {justifyContent: 'center', alignItems: 'center'}
});
