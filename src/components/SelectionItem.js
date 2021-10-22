import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class SelectionItem extends Component {
  render() {
    const {option} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={option} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 15,
  },
  image: {
    width: 65,
    height: 65,
  },
});
