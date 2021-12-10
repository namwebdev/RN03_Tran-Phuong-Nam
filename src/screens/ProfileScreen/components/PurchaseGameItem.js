import axios from 'axios';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../../../components';
import {navigate} from '../../../navigation';
import {COLORS} from '../../../themes/styles';
import {screenName} from '../../../utils/constants';

export default function PurchaseGameItem({game}) {
  const {title, subTitle, icon, id, preview, backgroundColor} = game;
  return (
    <TouchableOpacity
      onPress={() => navigate(screenName.detail, {id})}
      style={styles.container}>
      <Image
        resizeMode="cover"
        source={{uri: preview[0]}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text>{title}</Text>
        <Text color={COLORS.gray}>623 Sales</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text color={COLORS.lightPurple}>$346</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    flex: 2,
  },
  infoContainer: {
    paddingLeft: 20,
    flex: 4,
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  saleText: {},
});
