import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positiveNegative,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.row}>
        {/* Boton */}
        <BotonCalc
          texto="C"
          color="#9B9B9B"
          colorText="black"
          action={limpiar}
        />
        <BotonCalc
          texto="+/-"
          color="#9B9B9B"
          colorText="black"
          action={positiveNegative}
        />
        <BotonCalc
          texto="Del"
          color="#9B9B9B"
          colorText="black"
          action={btnDelete}
        />
        <BotonCalc
          texto="/"
          color="#ff9427"
          colorText="white"
          action={btnDividir}
        />
      </View>
      <View style={styles.row}>
        <BotonCalc texto="7" action={armarNumero} />
        <BotonCalc texto="8" action={armarNumero} />
        <BotonCalc texto="9" action={armarNumero} />
        <BotonCalc
          texto="X"
          color="#ff9427"
          colorText="white"
          action={btnMultiplicar}
        />
      </View>
      <View style={styles.row}>
        <BotonCalc texto="4" action={armarNumero} />
        <BotonCalc texto="5" action={armarNumero} />
        <BotonCalc texto="6" action={armarNumero} />
        <BotonCalc
          texto="-"
          color="#ff9427"
          colorText="white"
          action={btnRestar}
        />
      </View>
      <View style={styles.row}>
        <BotonCalc texto="1" action={armarNumero} />
        <BotonCalc texto="2" action={armarNumero} />
        <BotonCalc texto="3" action={armarNumero} />
        <BotonCalc
          texto="+"
          color="#ff9427"
          colorText="white"
          action={btnSumar}
        />
      </View>
      <View style={styles.row}>
        <BotonCalc texto="0" ancho action={armarNumero} />
        <BotonCalc texto="." action={armarNumero} />
        <BotonCalc
          texto="="
          color="#ff9427"
          colorText="white"
          action={calcular}
        />
      </View>
    </View>
  );
};
