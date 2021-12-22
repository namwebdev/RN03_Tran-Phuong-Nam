import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGTH = Dimensions.get('window').height;

export const COLORS = {
  lightBack: '#343434',
  lightPurple: '#819ee5',
  lightRed: '#e54949',
  lightYellow: '#f0db4f',
  white: '#ffffff',
  black: '#000000',
  gray: '#bbbbbb',
  lightGray: '#f9f9f9',
  darkGray: '#404040',
  opacityBlack: 'rgba(0,0,0,0.5)',
  opacityWhite: 'rgba(255,255,255,0.5)',
  red: "#d63031"
};

export const GAP = 15;

export const FONT_SIZE = {
  xxxl: 30,
  xxl: 26,
  xl: 22,
  lg: 20,
  md: 16,
  sm: 14,
  xs: 12,
  xxs: 10
};

export const FONT_STYLE = {
  black: 'Lato-Black',
  bold: 'Lato-Bold',
  normal: 'Lato-Regular',
  italic: 'Lato-Italic'
};
