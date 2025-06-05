import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Bem-vindo ao Petshop App!</Title>
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Cadastrar Pet')}
        style={styles.button}
      >
        Cadastrar Pet
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Pets Cadastrados')}
        style={styles.button}
      >
        Ver Pets Cadastrados
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Fornecedores')}
        style={styles.button}
      >
        Fornecedores
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.button}
      >
        Dashboard
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Produtos')}
        style={styles.button}
      >
        Produtos
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    marginVertical: 6,
  },
});
