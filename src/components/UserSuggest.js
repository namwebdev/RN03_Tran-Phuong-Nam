import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class UserSuggest extends Component {
  render() {
    const {name, image, mutual_friend_count} = this.props.user;
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image style={styles.image} source={image} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.mutual_friend_count}>{mutual_friend_count} bạn chung</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>kết bạn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#dddddd',
    marginBottom: 10,
    borderRadius: 10,
  },
  userInfo: {
    flex: 3,
    flexDirection: 'row',
    marginLeft: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 6,
  },
  name: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 16
  },
  mutual_friend_count: {
      fontSize: 12,
      color: 'black',
  },
  button: {
    flex: 1,
    textAlign: 'right',
    backgroundColor: '#bcbbfc',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: 'black',
  },
});
