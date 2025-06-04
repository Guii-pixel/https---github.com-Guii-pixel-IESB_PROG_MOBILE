import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import PetCard from '../components/PetCard'; // ✅ Import do PetCard

export default function PetsListScreen({ navigation }) {
  const [pets, setPets] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadPets();
    }
  }, [isFocused]);

  const loadPets = async () => {
    try {
      const data = await AsyncStorage.getItem('pets');
      if (data) {
        setPets(JSON.parse(data));
      } else {
        setPets([]);
      }
    } catch (error) {
      console.error('Erro ao carregar pets:', error);
    }
  };

  const deletePet = (id) => {
    Alert.alert('Remover Pet', 'Deseja realmente remover este pet?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'OK',
        onPress: async () => {
          const atualizados = pets.filter(p => p.id !== id);
          await AsyncStorage.setItem('pets', JSON.stringify(atualizados));
          setPets(atualizados);
        }
      }
    ]);
  };

  return (
    <>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PetCard
            pet={item}
            onPress={() => navigation.navigate('Cadastrar Pet', { pet: item })}
            onDelete={() => deletePet(item.id)}
          />
        )}
      />

      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
        onPress={() => navigation.navigate('Cadastrar Pet')}
      />
    </>
  );
}