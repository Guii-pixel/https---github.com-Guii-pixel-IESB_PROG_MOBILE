import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import { List, FAB, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PetListScreen({ navigation }) {
  const [pets, setPets] = useState([]);

  const loadPets = async () => {
    try {
      const dados = await AsyncStorage.getItem('pets');
      const pets = dados ? JSON.parse(dados) : [];
      setPets(pets);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os pets');
    }
  };

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmar exclusão',
      'Deseja realmente excluir este pet?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              const novosPets = pets.filter(p => p.id !== id);
              await AsyncStorage.setItem('pets', JSON.stringify(novosPets));
              setPets(novosPets);
              Alert.alert('Sucesso', 'Pet excluído com sucesso!');
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir o pet');
            }
          }
        }
      ]
    );
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadPets();
    });
    return unsubscribe;
  }, [navigation]);

  const getIconName = (tipo) => {
    if (!tipo) return 'dog'; // ícone padrão
    const tipoLower = tipo.toLowerCase();
    if (tipoLower.includes('gato')) return 'cat';
    if (tipoLower.includes('cachorro') || tipoLower.includes('cao') || tipoLower.includes('dog')) return 'dog';
    // pode adicionar mais condições para outros tipos de pet aqui
    return 'paw'; // ícone genérico se não reconhecido
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.nome}
            description={`Tipo: ${item.tipo} | Raça: ${item.raca || '-'}`}
            onPress={() => navigation.navigate('Cadastrar Pet', { pet: item })}
            left={props => <List.Icon {...props} icon={getIconName(item.tipo)} />}
            right={props => (
              <IconButton
                {...props}
                icon="delete"
                color="red"
                onPress={() => handleDelete(item.id)}
              />
            )}
          />
        )}
      />

      <FAB
        icon="plus"
        onPress={() => navigation.navigate('Cadastrar Pet')}
        style={styles.fab}
        label="Novo Pet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});
