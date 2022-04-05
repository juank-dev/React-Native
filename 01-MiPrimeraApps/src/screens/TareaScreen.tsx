import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2877d9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5858d6',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    backgroundColor: '#1545ff',
    borderWidth: 10,
    borderColor: 'white',
  },
});
