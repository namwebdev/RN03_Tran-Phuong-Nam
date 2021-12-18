import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from '../../themes/styles';

export default function Text(props) {
  const {
    color = COLORS.black,
    children,
    style,
    bold,
    xxxl,
    xxl,
    xl,
    lg,
    sm,
    xs,
    xxs
  } = props;
  return (
    <RNText
      {...props}
      style={[
        style,
        styles.md,
        xxxl && styles.xxxl,
        xxl && styles.xxl,
        xl && styles.xl,
        lg && styles.lg,
        sm && styles.sm,
        xs && styles.xs,
        xxs && styles.xxs,
        bold && styles.bold,
        {color}
      ]}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  xxxl: {
    fontSize: FONT_SIZE.xxxl
  },
  xxl: {
    fontSize: FONT_SIZE.xxl
  },
  xl: {
    fontSize: FONT_SIZE.xl
  },
  lg: {
    fontSize: FONT_SIZE.lg
  },
  md: {
    fontSize: FONT_SIZE.md
  },
  sm: {
    fontSize: FONT_SIZE.sm
  },
  xs: {
    fontSize: FONT_SIZE.xs
  },
  xxs: {
    fontSize: FONT_SIZE.xxs
  },
  bold: {
    fontWeight: 'bold'
  }
});
