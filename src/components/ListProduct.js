import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

export default class ListProduct extends Component {
  renderListProduct = ({image, name, price}) => (
    <TouchableOpacity style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    const {products} = this.props;
    return (
      <FlatList
        horizontal={false}
        style={styles.container}
        data={products}
        keyExtractor={(item, index) => index + item.image}
        renderItem={({item}) => this.renderListProduct(item)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {marginTop: 20},
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 90,
  },
  infoContainer: {flex: 1.1, height: '100%', justifyContent: 'center'},
  name: {color: '#BEC1D2', fontSize: 16},
  price: {fontWeight: 'bold', fontSize: 18},
});
