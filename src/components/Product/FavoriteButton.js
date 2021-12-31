import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import userApi from '../../api/user';
import useProduct from '../../hooks/useProduct';

export default function FavoriteButton({product, size = 15}) {
  const {id} = product;
  const {favoProducts, dispatchFavoProducts} = useProduct();
  const isFavorite = favoProducts.some(p => p.id === id);
  const iconName = isFavorite ? 'favorite' : 'favorite-border';

  const hanldePressFavo = () => {
    if (isFavorite)
      userApi
        .unLike(id)
        .then(() =>
          dispatchFavoProducts(favoProducts.filter(p => p.id !== id))
        );
    else
      userApi
        .like(id)
        .then(() => dispatchFavoProducts([...favoProducts, product]));
    console.log('qwe' + [...favoProducts, product]);
  };
  return (
    <TouchableOpacity onPress={hanldePressFavo}>
      <Icon name={iconName} size={size} />
    </TouchableOpacity>
  );
}
