import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CategoryItem from './CategoryItem';
import useNavigation from '../../hooks/useNavigation';
import {screenName} from '../../utils/constants';
import {Text} from '..';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FavoriteButton from './FavoriteButton';

export default function ProductItem({
  product,
  isShowCate = true,
  isShowFavoBtn = false
}) {
  const {id, categories, name, image} = product;
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(screenName.detail, {id})}
      style={styles.container}>
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Image source={{uri: image}} style={styles.image} />
        <Text>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10
          }}>
          {isShowCate && (
            <>
              {JSON.parse(categories).map(({category}) => (
                <CategoryItem key={category} category={category} />
              ))}
            </>
          )}
        </View>
        {isShowFavoBtn && <FavoriteButton product={product} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    marginBottom: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  },
  image: {
    width: 150,
    height: 150
  }
});
