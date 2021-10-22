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
import {
  blackwindow,
  captain,
  flash,
  ironman,
  spiderman,
  strange,
  suppergirl,
  wanda,
  wonderwoman,
  yasuo,
} from './images';
import UserSearch from './components/UserSearch';
import UserSuggest from './components/UserSuggest';

const users = [
  {
    name: 'captain',
    mutual_friend_count: 24,
    image: captain,
  },
  {
    name: 'ironman',
    mutual_friend_count: 24,
    image: ironman,
  },
  {
    name: 'blackwindow',
    mutual_friend_count: 24,
    image: blackwindow,
  },
  {
    name: 'spiderman',
    mutual_friend_count: 24,
    image: spiderman,
  },
  {
    name: 'yasuo',
    mutual_friend_count: 24,
    image: yasuo,
  },
  {
    name: 'wanda',
    mutual_friend_count: 24,
    image: wanda,
  },
  {
    name: 'strange',
    mutual_friend_count: 24,
    image: strange,
  },
  {
    name: 'wonderwoman',
    mutual_friend_count: 24,
    image: wonderwoman,
  },
  {
    name: 'suppergirl',
    mutual_friend_count: 24,
    image: suppergirl,
  },
  {
    name: 'flash',
    mutual_friend_count: 24,
    image: flash,
  },
];

export default class Home extends Component {
  userSearchList = [...users]
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={styles.titleContainer}>
            <Entypo name="back-in-time" size={30} color={'black'} />
            <Text style={styles.title}>Danh sách tìm kiếm gần đây</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.userSearchList}
            renderItem={({item}) => <UserSearch user={item} />}
            keyExtractor={item => item.name}
          />
        </View>
        <View style={{flex: 4}}>
          <View style={styles.titleContainer}>
            <Ionicons name="ios-people" size={30} color={'black'} />
            <Text style={styles.title}>Gợi ý kết bạn</Text>
          </View>
          <ScrollView>
            {users.map((user, index) => (
              <UserSuggest user={user} key={index} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 6,
    color: 'black',
  },
});
