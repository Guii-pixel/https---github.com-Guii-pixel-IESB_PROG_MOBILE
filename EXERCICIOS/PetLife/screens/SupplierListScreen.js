import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const fornecedores = [
  { id: '1', nome: 'PetShop ABC', contato: '1234-5678' },
  { id: '2', nome: 'Fornecedor XYZ', contato: '9876-5432' },
];

export default function SupplierListScreen() {
  return (
    <View style={styles.container}>
      {fornecedores.map(fornecedor => (
        <List.Item
          key={fornecedor.id}
          title={fornecedor.nome}
          description={`Contato: ${fornecedor.contato}`}
          left={props => <List.Icon {...props} icon="store" />}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
