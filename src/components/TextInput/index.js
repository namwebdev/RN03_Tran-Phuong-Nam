import React, {useReducer, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Animated
} from 'react-native';
import {REGEX_EMAIL} from '../../utils/constants';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_FOCUSE = 'INPUT_FOCUSE';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        touched: true
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
        focus: false
      };
    case INPUT_FOCUSE:
      return {
        ...state,
        focus: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const {onInputChange} = props;

  const textAnim = useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  const fontSize = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [props.fontSize || 18, 13]
  });

  const marginTop = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -7]
  });

  const color = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(70,70,90)', props.borderColor || 'rgb(70,70,90)']
  });

  const animatedStyle = {
    fontSize,
    marginTop,
    color: props.borderColor && color
  };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false
  });

  useEffect(() => {
    if (inputState.touched) onInputChange(inputState.value, inputState.isValid);
  }, [inputState, onInputChange]);

  const textChangeHandler = text => {
    let isValid = true;
    const {required, email, minLength} = props;

    if (required && text.trim().length === 0) {
      isValid = false;
    }
    if (email && !REGEX_EMAIL.test(text)) {
      isValid = false;
    }
    if (minLength !== null && text.length < minLength) {
      isValid = false;
    }
    dispatch({type: INPUT_CHANGE, value: text, isValid});
  };

  const lostFocusHandler = () => {
    dispatch({type: INPUT_BLUR});
  };

  return (
    <Animated.View style={[styles.formControl, props.formControlStyle]}>
      <Animated.Text
        style={[
          styles.label,
          (inputState.touched || inputState.focus) && styles.endLabel,
          props.initialValue ? styles.basic : animatedStyle,
          !inputState.isValid && inputState.touched && styles.redColor,
          props.borderColor && inputState.focus && {color: props.borderColor},
          props.right && styles.labelRight,
          props.labelStyle
        ]}>
        {props.label}
      </Animated.Text>
      <TextInput
        onSubmitEditing={text => (props.submit ? props.submit(text) : null)}
        onFocus={() => {
          dispatch({type: INPUT_FOCUSE, focus: true});
          handleAnimation();
        }}
        textAlignVertical="top"
        {...props}
        style={[
          styles.input,
          {
            borderColor:
              inputState.isValid || !inputState.touched
                ? '#ccc'
                : 'rgb(211,55,83)'
          },
          inputState.focus &&
            props.borderColor && {borderColor: props.borderColor},
          props.inputStyle
        ]}
        value={props.value || inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && props.errorText && (
        <View style={[styles.errorContainer, props.errorContainerStyle]}>
          <Text
            style={[
              styles.errorText,
              props.right && styles.errorTxtRight,
              props.borderColor &&
                inputState.focus && {color: props.borderColor},
              props.errorText
            ]}>
            {props.errorText}
          </Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10
  },
  basic: {
    fontSize: 13,
    marginTop: -7,
    zIndex: 10
  },
  label: {
    marginVertical: 8,
    color: 'rgb(70,70,90)',
    position: 'absolute',
    marginTop: 13,
    left: 20,
    backgroundColor: 'white',
    paddingHorizontal: 5
  },
  lineLabel: {
    marginVertical: 8,
    fontSize: 15,
    color: 'rgb(60,60,70)'
  },
  endLabel: {
    zIndex: 10
  },
  redColor: {
    color: 'rgb(211,55,83)'
  },
  input: {
    fontSize: 22,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 8 : 3,
    borderWidth: 1.5,
    borderRadius: 5
  },
  inputLine: {
    fontSize: 22,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomWidth: 1
  },
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    paddingHorizontal: 15,
    color: 'rgb(211,55,83)',
    fontSize: 13
  },
  errorTxtRight: {textAlign: 'right'},
  labelRight: {right: 20, left: null},
  lineLabelRight: {textAlign: 'right'}
});

export default Input;

// import React, {Component} from 'react';
// import {TextInput as RNTextInput, StyleSheet} from 'react-native';
// import {Text} from '..';
// import {COLORS} from '../../themes/styles';

// export default function TextInput(props) {
//   const {placeholder, style, errorText} = props;
//   return (
//     <>
//       <RNTextInput
//         {...props}
//         placeholder={placeholder}
//         placeholderTextColor="#rgba(255,255,255, 0.5)"
//         style={[errorText && styles.error, styles.textInput, style]}
//       />
//       {errorText && <Text color={COLORS.red}>{errorText}</Text>}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   textInput: {
//     backgroundColor: '#f9f9f9',
//     height: 50,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     color: COLORS.black,
//     marginBottom: 12,
//     borderWidth: 1
//   },
//   error: {borderColor: COLORS.red, backgroundColor: COLORS.red}
// });
