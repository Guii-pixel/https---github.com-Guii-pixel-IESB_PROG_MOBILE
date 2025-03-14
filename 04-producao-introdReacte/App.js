import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';


//Componenete principal 
// Ele deve retornar o que será renderizado na tela (template feito com JSX)
export default function App() {
 //Lógica do meu componente
  const nome = "Guilherme"

  function alerta() {
    alert("Você clicou no botão")
  }




 //retorno com JSX
  return (
    <View style={styles.container}>


      {/* */}


      <Text>Vai Flamengo!</Text>
      <StatusBar style="auto" />

      <Button title='Alerta' onPress= {alerta}></Button>

      <Image source={ { uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.todamateria.com.br%2Fleao%2F&psig=AOvVaw3zkS0hrM1a9e1MPmxFBlBb&ust=1741998777891000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiAjqapiIwDFQAAAAAdAAAAABAE' }}
      style={{
        height: 300,
        width: 300
      }}
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
