import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_STYLE} from '../../themes/styles';

export default function Text(props) {
  const {
    color = COLORS.black,
    children,
    style,
    bold,
    italic,
    black,
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
        styles.default,
        xxxl && styles.xxxl,
        xxl && styles.xxl,
        xl && styles.xl,
        lg && styles.lg,
        sm && styles.sm,
        xs && styles.xs,
        xxs && styles.xxs,
        bold && styles.bold,
        italic && styles.italic,
        black && styles.black,
        {color}
      ]}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: FONT_STYLE.normal,
    fontSize: FONT_SIZE.md
  },
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
    fontFamily: FONT_STYLE.bold
  },
  italic: {
    fontFamily: FONT_STYLE.italic
  },
  black: {
    fontFamily: FONT_STYLE.black
  }
});
