import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import Button from './components/Button';
import SelectionItem from './components/SelectionItem';
import {background, player, paper, rock, computer, scissor} from './images';

export default class Home extends Component {
  selectionOptions = [paper, rock, scissor];
  render() {
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.overlay} />
        <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
          <View style={styles.playContainer}>
            <PlayItem selection={paper} avatar={player} />
            <PlayItem selection={rock} avatar={computer} />
          </View>
          <View style={styles.selectContainer}>
            <SelectionItem option={paper} />
            <SelectionItem option={rock} />
            <SelectionItem option={scissor} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Score: 0</Text>
            <Text style={styles.infoText}>Times: 2</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title={'Play'} color={'#a29bfe'} />
            <Button title={'Reset'} color={'#fdcb6e'} />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

class PlayItem extends Component {
  render() {
    const {selection, avatar} = this.props;
    return (
      <View>
        <View style={styles.playerSelection}>
          <Image style={{width: 100, height: 100}} source={selection} />
          <View style={styles.triangle} />
        </View>
        <Image style={{width: 100, height: 100}} source={avatar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    ...StyleSheet.absoluteFill,
  },
  playContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playerSelection: {
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 2,
    marginBottom: 12,
    borderRadius: 15,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'yellow',
    transform: [{rotate: '180deg'}],
    position: 'absolute',
    bottom: -12,
    left: '44%',
  },
  selectContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  infoContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00fdcb',
  },
  btnContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
