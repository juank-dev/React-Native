/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';

/* import {FlexScreen} from './src/screens/FlexScreen'; */
/* import {PositionScreen} from './src/screens/PositionScreen'; */
/* import {DimensionesScreen} from './src/screens/DimensionesScreen'; */
/* import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen'; */
/* import {ContadorScreen} from './src/screens/ContadorScreen'; */
/* import {HolaMundoScreen} from './src/screens/HolaMundoScreen'; */

const App = () => {
  return (
    //Hay dispositivos que tienen notch SafeAreaView permite renderidar el compoenente dentro del area visible del usuario
    <SafeAreaView style={{flex: 1}}>
      <TareaScreen />
    </SafeAreaView>
    //  <FlexScreen />
    //<PositionScreen />
    //  <DimensionesScreen />
    //<BoxObjectModelScreen />
    //<HolaMundoScreen />;
    //<ContadorScreen />
  );
};

export default App;
