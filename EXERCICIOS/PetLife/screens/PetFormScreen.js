import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, HelperText, Title } from 'react-native-paper';
import MaskInput from 'react-native-mask-input';

export default function PetFormScreen({ navigation, route }) {
  const petParam = route.params?.pet;

  const [id, setId] = useState(null);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [raca, setRaca] = useState('');
  const [peso, setPeso] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  useEffect(() => {
    if (petParam) {
      setId(petParam.id);
      setNome(petParam.nome);
      setTipo(petParam.tipo);
      setRaca(petParam.raca);
      setPeso(petParam.peso);
      setDataNascimento(petParam.dataNascimento);
    }
  }, [petParam]);

  const hasErrors = () => nome === '' || tipo === '' || peso === '';

  const handleSave = async () => {
    if (hasErrors()) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return;
    }

    const novoPet = {
      id: id ?? Date.now(),
      nome,
      tipo,
      raca,
      peso,
      dataNascimento,
    };

    try {
      const dados = await AsyncStorage.getItem('pets');
      let pets = dados ? JSON.parse(dados) : [];

      if (id) {
        // Edição: atualiza pet existente
        pets = pets.map(p => (p.id === id ? novoPet : p));
      } else {
        // Novo pet
        pets.push(novoPet);
      }

      await AsyncStorage.setItem('pets', JSON.stringify(pets));
      Alert.alert('Sucesso', `Pet ${id ? 'atualizado' : 'cadastrado'} com sucesso!`);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>{id ? 'Editar Pet' : 'Cadastro de Pet'}</Title>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={styles.input}
      />
      <HelperText type="error" visible={nome === ''}>
        Nome é obrigatório
      </HelperText>

      <TextInput
        label="Tipo (Ex: Cachorro, Gato)"
        value={tipo}
        onChangeText={setTipo}
        mode="outlined"
        style={styles.input}
      />
      <HelperText type="error" visible={tipo === ''}>
        Tipo é obrigatório
      </HelperText>

      <TextInput
        label="Raça"
        value={raca}
        onChangeText={setRaca}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <HelperText type="error" visible={peso === ''}>
        Peso é obrigatório
      </HelperText>

      <View style={styles.maskedInputContainer}>
        <HelperText type="info" visible={true}>
          Data de Nascimento (DD/MM/AAAA)
        </HelperText>
        <MaskInput
          value={dataNascimento}
          onChangeText={setDataNascimento}
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          style={styles.maskedInput}
          keyboardType="numeric"
        />
      </View>

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        {id ? 'Atualizar' : 'Salvar'}
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  maskedInputContainer: {
    marginBottom: 12,
  },
  maskedInput: {
    backgroundColor: 'white',
    height: 56,
    borderColor: '#6200ee',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    color: 'black',
  },
  button: {
    marginTop: 16,
  },
});
