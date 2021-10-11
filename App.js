import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    <View style={styles.container}>
      {colors.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: item.color,
            height: 170,
            marginBottom: 10,
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.name}>
            {item.name}: <Text style={styles.color}>{item.color}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
}
