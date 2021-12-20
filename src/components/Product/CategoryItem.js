import React from 'react';
import {View} from 'react-native';
import {Text} from '..';

export default function CategoryItem({category}) {
  return (
    <View>
      <Text xxs style={{marginRight: 10}}>
        {category}
      </Text>
    </View>
  );
}
