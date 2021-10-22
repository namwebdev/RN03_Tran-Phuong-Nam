import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const users = [
  {
    name: 'captain',
    mutual_friend_count: 24,
    image: require('./images/captain.jpg'),
  },
  {
    name: 'ironman',
    mutual_friend_count: 24,
    image: require('./images/ironman.jpeg'),
  },
  {
    name: 'blackwindow.jpeg',
    mutual_friend_count: 24,
    image: require('./images/blackwidow.jpg'),
  },
  {
    name: 'spiderman',
    mutual_friend_count: 24,
    image: require('./images/spiderman.jpeg'),
  },
  {
    name: 'yasuo',
    mutual_friend_count: 24,
    image: require('./images/yasuo.jpg'),
  },
  {
    name: 'wanda',
    mutual_friend_count: 24,
    image: require('./images/wanda.jpg'),
  },
  {
    name: 'strange',
    mutual_friend_count: 24,
    image: require('./images/strange.jpg'),
  },
  {
    name: 'wonderwoman',
    mutual_friend_count: 24,
    image: require('./images/wonderwoman.jpg'),
  },
  {
    name: 'suppergirl',
    mutual_friend_count: 24,
    image: require('./images/spiderman.jpeg'),
  },
  {
    name: 'flash',
    mutual_friend_count: 24,
    image: require('./images/spiderman.jpeg'),
  },
];

export default class Home extends Component {
  userSearchList = [...users]
    .sort(() => Math.random() - Math.random())
    .slice(0, 8);

  render() {
    console.log(this.userSearchList);
    return (
      <View>
        <View style={{marginBottom: 20}}>
          <View style={styles.titleContainer}>
            <Entypo name="back-in-time" size={30} />
            <Text style={styles.title}>Danh sách tìm kiếm gần đây</Text>
          </View>
          <View>
            <FlatList
              data={this.userSearchList}
              horizontal
              style={{flexGrow: 0}}
              renderItem={({user}) => <UserSearch user={user} />}
              keyExtractor={(user, index) => `${user.name}_${index}`}
            />
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

class UserSearch extends Component {
  render() {
    const {user} = this.props;
    console.log(this.props);
    return (
      <View>
        {/* <Image
          style={styles.userImage}
          source={user.image}
        /> */}
        <Text>{user}</Text>
      </View>
    );
  }
}

class UserSuggest extends Component {
  render() {
    return (
      <View>
        <Image />
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
