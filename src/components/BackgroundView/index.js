import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../themes/styles';

export default function BackgroundView({edges, children}) {
  return (
    <SafeAreaView style={styles.container} edges={edges}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBack,
  },
});
