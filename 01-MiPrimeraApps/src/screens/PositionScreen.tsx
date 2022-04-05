import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxGreen} />
      <View style={styles.boxPurple} />
      <View style={styles.boxOrange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    width: 350,
    height: 400,
/*     justifyContent: 'center',
    alignItems: 'center', */
    backgroundColor: '#28c4d9',
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: '#5858d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
  },
  boxOrange: {
    backgroundColor: '#f0a23b',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  boxGreen: {
    backgroundColor: 'green',
/*     width: 100,
    height: 100, */
    borderWidth: 10,
    borderColor: 'white',
    /* position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0, */
    ...StyleSheet.absoluteFillObject,
  },
});
