import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class UserSearch extends Component {
  render() {
    const {user} = this.props;
    return (
      <View style={{marginHorizontal: 10}}>
        <Image style={styles.userImage} source={user.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 12,
    marginTop: 5,
    color: 'black',
  },
});
