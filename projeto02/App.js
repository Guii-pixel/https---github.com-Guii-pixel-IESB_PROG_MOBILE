import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SegundoComponente from './componentes/SegundoComponente';
import PrimeiroComponente from './componentes/primeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';

export default function App() {
  return (
    <View style={styles.container}>
      

   <PrimeiroComponente />

    <SegundoComponente />

    <JavaScriptComponente />

    <Perfil 
      nome="romao"
      sobrenome="Lima"
      idade={30}
    />
     <Perfil 
      nome="Gustavo"
      sobrenome="Lima"
      idade={30}
    />
     <Perfil 
      nome="guilherme"
      sobrenome="Lima"
      idade={30}
    />
   




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
