import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    //backgroundColor: 'red',
    //width: 150,
    borderWidth: 5,
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});
