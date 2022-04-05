import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

//const {width, height} = Dimensions.get('window'); Si hay redimension no lo toma en tiempo real

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxOrange} />
        <View style={{...styles.boxPurple, width: width * 0.6}} />
      </View>
      <Text style={styles.title}>
        W: {width} - H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
  },
  boxPurple: {
    backgroundColor: '#5858d6',
    height: '50%',
  },
  boxOrange: {
    backgroundColor: '#f0a23b',
  },
});
