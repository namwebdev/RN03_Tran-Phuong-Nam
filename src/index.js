import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {angry, care, haha, like, sad, love} from './images/index';

export default class Home extends Component {
  images = [
    {name: 'angry', image: angry},
    {name: 'care', image: care},
    {name: 'haha', image: haha},
    {name: 'like', image: like},
    {name: 'sad', image: sad},
    {name: 'love', image: love},
  ];
  state = {index: 1};

  handlePress = index => this.setState({index});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bạn đang cảm thấy như thế nào?</Text>
        <Image
          style={styles.activeEmoji}
          source={this.images[this.state.index].image}
        />
        <View style={styles.emojiList}>
          {this.images.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.handlePress(index)}>
              <Image
                style={styles.emoji}
                source={emoji.image}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  activeEmoji: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
  emojiList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 25,
  },
  emoji: {
    width: 32,
    height: 32,
  },
});
