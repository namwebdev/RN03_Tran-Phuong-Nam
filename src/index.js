import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class Home extends Component {
  images = ["angry", "care", "haha", "like", "love", "sad"];
  state = { index: 1 };

  handlePress = (index) => this.setState({ index });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bạn đang cảm thấy như thế nào?</Text>
        <Image
          style={styles.activeEmoji}
          source={require(`./images/${this.images[this.state.index]}.png`)}
        />
        <View style={styles.emojiList}>
          {this.images.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.handlePress(index)}
            >
              <Image
                style={styles.emoji}
                source={require(`./images/${emoji}.png`)}
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
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  activeEmoji: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
  emojiList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 25,
  },
  emoji: {
    width: 32,
    height: 32,
  },
});
