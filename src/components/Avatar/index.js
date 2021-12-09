import React from 'react';
import {Image, View} from 'react-native';

export default function Avatar(props) {
  const imageDefaultUrl =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png';
  const {imageUrl = imageDefaultUrl, size = 50} = props;
  return (
    <Image
      source={{
        uri: imageUrl,
      }}
      style={{width: size, height: size, borderRadius: size / 2}}
    />
  );
}
