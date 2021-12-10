import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {BackgroundView, Text} from '../../components';
import {screenName} from '../../../utils/constants';
import {navigate} from '../../../navigation';

export default function PopularGameItem({game}) {
  const {title, subTitle, icon, id, preview, backgroundColor} = game;

  return (
    <TouchableOpacity onPress={() => navigate(screenName.detail, {id})}>
      <Image source={{uri: preview[0]}} style={styles.gameImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gameImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});
