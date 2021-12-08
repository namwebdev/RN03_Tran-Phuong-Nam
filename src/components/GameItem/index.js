import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {navigate} from '../../navigation';
import {screenName} from '../../utils/constants';
import Text from '../Text';

export default function GameItem({game}) {
  const {title, subTitle, icon, id, preview, backgroundColor} = game;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(screenName.detail, {id})}>
      <Image source={{uri: preview[0]}} style={styles.banner} />
      <View style={[styles.gameInfo, {backgroundColor}]}>
        <Image source={{uri: icon}} style={styles.icon} />
        <View style={styles.gameInfoContent}>
          <Text title>{title}</Text>
          <Text subTitle>{subTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
  },
  gameInfo: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    position: 'absolute',
    left: 20,
    bottom: -40,
  },
  icon: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  gameInfoContent: {
    width: '70%',
  },
});
