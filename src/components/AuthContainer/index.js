import React from 'react';
import {View, Image, StyleSheet, Keyboard} from 'react-native';
import {AuthBackground} from '../../assets/images';
import {GAP} from '../../themes/styles';

export default function AuthContainer({children}) {
  return (
    <View>
      <Image
        resizeMode="cover"
        source={AuthBackground}
        style={stlyes.background}
      />
      <View style={stlyes.content}>{children}</View>
    </View>
  );
}

const stlyes = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  content: {
    position: 'absolute',
    paddingHorizontal: GAP,
    top: '35%',
    backgroundColor: '#f9f9f9',
    width: '100%',
    height: '100%'
  }
});
