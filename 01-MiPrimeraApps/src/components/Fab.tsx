//Fab Floationg Action Button

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[styles.fabLocation, styles[position]]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View style={[styles.fabLocation, styles[position || 'br']]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#00000050', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}> {title} </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    top: -15,
  },
  fabLocation: {
    position: 'absolute',
    bottom: 20,
  },
  br: {
    right: 20,
  },
  bl: {
    left: 20,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
