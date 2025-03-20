// imports dos componentes e libs
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// função principal do componente
export default function App() {
  // lógica do meu componente

  function alerta() {
    alert('Gol do Flamengo!!!')
  }

  // retorno é um código JSX (Template) do que vai ser
  // renderizado na tela
  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.textoGrande} >Clube de Regatas do Flamengo</Text>

      
        <Text style={{ fontSize: 40 }} > - Campeão da Libertadores 3 vezes! (1981, 2019, 2022)</Text>
        <Text style={{ fontSize: 40 }} > - Fundação: 15 de novembro de 1895</Text>
        <Text  style={{ fontSize: 40 }} > - Tem como cores: VERMELHO, PRETO, BRANCO (RUBRO-NEGRO)</Text>
       

        
        <Image
          source={require('./imagens/image.fla.jpg')}
          style={{
            height: 600,
            width: 400,
            padding: 20
          }}
        />

        
        <Image
          source={require('./imagens/img-flamengo.jpg')}
          style={{
            height: 400,
            width: 400,
            padding: 20
          }}
        />

        <Image
          source={require('./imagens/img-fla.jpg')}
          style={{
            height: 400,
            width: 400,
            padding: 20
          }}
        />

        <Image
          source={require('./imagens/imgs-fla.jpg')}
          style={{
            height: 400,
            width: 400,
            padding: 20
          }}
        />

        <Image
          source={require('./imagens/imagens-fla.jpg')}
          style={{
            height: 400,
            width: 400,
            padding: 20
          }}
        />


        
        <Button title='GOLLLL' onPress={alerta} ></Button>

      </View>


    </ScrollView>    
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic',
    backgroundColor:'red'
  }
});