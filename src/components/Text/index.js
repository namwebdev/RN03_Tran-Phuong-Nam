import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default function Text(props) {
  const {color = COLORS.white, children, style, title, subTitle} = props;
  return (
    <RNText
      {...props}
      style={[
        style,
        title && styles.title,
        subTitle && styles.subTitle,
        {color},
      ]}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 12,
    opacity: 0.6,
  },
});
