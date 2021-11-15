import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './src';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  item: {
    height: 500,
  },
  name: {fontWeight: 'bold', fontSize: 18},
  color: {textTransform: 'uppercase'},
});

export default function App() {
  const colors = [
    {name: 'Purple', color: '#c9c9ff'},
    {name: 'Blue', color: '#3d85c6'},
    {name: 'Green', color: '#96cc96'},
    {name: 'Yellow', color: '#f4b940'},
  ];

  return (
    <Home />
  );
}
