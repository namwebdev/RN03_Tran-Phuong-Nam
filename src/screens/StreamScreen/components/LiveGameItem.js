import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {BackgroundView, Text} from '../../../components';
import {COLORS} from '../../../themes/styles';

export default function LiveGameItem({game}) {
  const {title, subTitle, icon, id, preview, backgroundColor} = game;

  return (
    <View>
      <Image source={{uri: preview[0]}} style={styles.image} />
      <Text
        style={[
          styles.nameTag,
          styles.tag,
          {backgroundColor: COLORS.lightPurple},
        ]}
        title>
        {title}
      </Text>
      <Text
        style={[styles.liveTag, styles.tag, {backgroundColor: COLORS.lightRed}]}
        title>
        Live
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    position: 'absolute',
  },
  nameTag: {
    top: 5,
    right: 55,
  },
  liveTag: {
    top: 5,
    right: 5,
  },
});
