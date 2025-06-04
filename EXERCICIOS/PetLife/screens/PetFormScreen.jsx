import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { TextInput, Button, HelperText, RadioButton, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaskedTextInput } from 'react-native-mask-input';
import * as yup from 'yup';

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  raca: yup.string().required('Raça é obrigatória'),
  idade: yup.number().typeError('Idade deve ser numérica').required('Idade é obrigatória'),
  nascimento: yup.string().required('Data é obrigatória'),
});

export default function PetFormScreen({ route, navigation }) {
  const petEdit = route.params?.pet;
  const [form, setForm] = useState({
    id: petEdit?.id || Date.now().toString(),
    nome: petEdit?.nome || '',
    raca: petEdit?.raca || '',
    idade: petEdit?.idade?.toString() || '',
    nascimento: petEdit?.nascimento || '',
    tipo: petEdit?.tipo || 'Cachorro',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSave = async () => {
    try {
      await schema.validate(form, { abortEarly: false });
      const data = await AsyncStorage.getItem('pets');
      let pets = data ? JSON.parse(data) : [];

      const index = pets.findIndex(p => p.id === form.id);
      if (index >= 0) {
        pets[index] = form;
      } else {
        pets.push(form);
      }

      await AsyncStorage.setItem('pets', JSON.stringify(pets));
      navigation.goBack();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorObj = {};
        err.inner.forEach(e => {
          errorObj[e.path] = e.message;
        });
        setErrors(errorObj);
      }
    }
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <TextInput
        label="Nome"
        value={form.nome}
        onChangeText={(text) => handleChange('nome', text)}
        error={!!errors.nome}
      />
      <HelperText type="error">{errors.nome}</HelperText>

      <TextInput
        label="Raça"
        value={form.raca}
        onChangeText={(text) => handleChange('raca', text)}
        error={!!errors.raca}
      />
      <HelperText type="error">{errors.raca}</HelperText>

      <TextInput
        label="Idade"
        value={form.idade}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('idade', text)}
        error={!!errors.idade}
      />
      <HelperText type="error">{errors.idade}</HelperText>

      <Text>Data de Nascimento</Text>
      <MaskedTextInput
        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        value={form.nascimento}
        onChangeText={(text) => handleChange('nascimento', text)}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 8, fontSize: 16 }}
      />
      <HelperText type="error">{errors.nascimento}</HelperText>

      <Text>Tipo de Animal</Text>
      <RadioButton.Group onValueChange={(value) => handleChange('tipo', value)} value={form.tipo}>
        <RadioButton.Item label="Cachorro" value="Cachorro" />
        <RadioButton.Item label="Gato" value="Gato" />
        <RadioButton.Item label="Outro" value="Outro" />
      </RadioButton.Group>

      <Button mode="contained" onPress={handleSave}>
        Salvar
      </Button>
    </ScrollView>
  );
}