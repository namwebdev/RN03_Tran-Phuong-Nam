import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const users = [
  'captain',
  'ironman',
  'blackwindow',
  'spiderman',
  'yasuo',
  'wanda',
  'wonderwoman',
  'suppergirl',
  'strange',
  'flash',
];

export default class Home extends Component {
  userSearchList = [...users]
    .sort(() => Math.random() - Math.random())
    .slice(0, 8);
  //   userSearchList = [
  //     'captain',
  //     'ironman',
  //     'blackwindow',
  //     'spiderman',
  //     'yasuo',
  //     'wanda',
  //     'wonderwoman',
  //     'suppergirl',
  //     'strange',
  //     'flash',
  //   ];
  imagePath = imageName => {
    return `./images/ironman.jpg`;
  };
  render() {
    return (
      <View>
        <View style={{marginBottom: 20}}>
          <View style={styles.titleContainer}>
            <Entypo name="back-in-time" size={30} />
            <Text style={styles.title}>Danh sách tìm kiếm gần đây</Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              style={{marginVertical: 20}}
              contentContainerStyle={{
                justifyContent: 'center',
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}>
              {this.userSearchList.map((user, index) => (
                <View key={index}>
                  <Image
                    style={styles.userImage}
                    source={require('./images/ironman.jpeg')}
                  />
                  <Text>{user}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View>
          <View style={styles.titleContainer}>
            <Ionicons name="ios-people" size={30} />
            <Text style={styles.title}>Gợi ý kết bạn</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 6,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
});
