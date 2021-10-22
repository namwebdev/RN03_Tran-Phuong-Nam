import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Button extends Component {
  render() {
    const {title, color} = this.props;
    return (
      <LinearGradient style={styles.container} colors={['#bff', color]}>
        <TouchableOpacity>
          <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
