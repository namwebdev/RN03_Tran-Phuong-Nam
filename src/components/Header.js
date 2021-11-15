import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {menu, search} from '../assets/icons/index';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={menu} style={styles.icon} />
        <Text style={{fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold'}}>Shoe Shop</Text>
        <Image source={search} style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  icon: {
    width: 30,
    height: 30,
  },
});
