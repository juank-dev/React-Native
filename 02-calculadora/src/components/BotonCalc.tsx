/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  colorText?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2d2d2d',
  colorText = 'white',
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => action(texto)}
      style={{
        ...styles.boton,
        backgroundColor: color,
        width: ancho ? 180 : 80,
      }}>
      <Text style={{...styles.botonTexto, color: colorText}}>{texto}</Text>
    </TouchableOpacity>
  );
};
