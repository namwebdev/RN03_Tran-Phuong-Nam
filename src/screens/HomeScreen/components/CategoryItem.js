import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';

export default function CategoryItem({category: cateProps, isActive, onPress}) {
  const {category} = cateProps;
  return (
    <TouchableOpacity onPress={onPress} style={[isActive && styles.active]}>
      <Text bold={isActive}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  category: {},
  active: {
    backgroundColor: 'blue'
  }
});
