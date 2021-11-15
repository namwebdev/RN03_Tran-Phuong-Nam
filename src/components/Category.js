import React, {Component} from 'react';
import {Svg, Polygon} from 'react-native-svg';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default class Category extends Component {
  renderCategory = ({color: backgroundColor, image, name}) => (
    <TouchableOpacity
      onPress={() => console.log('clicked')}
      style={styles.categoryContainer}>
      <Text style={styles.categoryName}>{name}</Text>

      <View style={[styles.categoryBackground, {backgroundColor}]} />

      <View
        style={{
          position: 'absolute',
          top: 18,
          right: 0,
          width: '95%',
          height: '100%',
        }}>
        <Svg height="100%" width="100%">
          <Polygon points="10,0 200,0 160,60" fill="white" />
        </Svg>
      </View>
      <Image source={image} resizeMode="contain" style={styles.categoryImage} />
    </TouchableOpacity>
  );
  render() {
    const {categories} = this.props;
    return (
      <>
        <Text style={styles.title}>Category</Text>
        <View style={styles.container}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item, index) => index + item.color}
            renderItem={({item}) => this.renderCategory(item)}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {flex: 1, fontSize: 24, fontWeight: 'bold'},
  container: {flex: 4},
  categoryContainer: {
    width: 150,
    height: 120,
    marginBottom: 20,
    borderRadius: 15,
    marginRight: 30,
  },
  categoryName: {fontSize: 14, color: '#BEC1D2', fontWeight: 'bold'},
  categoryBackground: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  categoryImage: {
    position: 'absolute',
    top: 20,
    left: -5,
    width: '110%',
    height: 80,
    transform: [{rotate: '-15deg'}],
  },
});
