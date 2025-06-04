import React, { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { TextInput, Button, List, HelperText, Dialog, Portal, Text, FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaskedTextInput } from 'react-native-mask-input';

export default function VaccinesScreen() {
  const [vacinas, setVacinas] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ id: '', nome: '', data: '', observacoes: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    carregarVacinas();
  }, []);

  const carregarVacinas = async () => {
    const data = await AsyncStorage.getItem('vacinas');
    if (data) setVacinas(JSON.parse(data));
  };

  const salvarVacinas = async (lista) => {
    await AsyncStorage.setItem('vacinas', JSON.stringify(lista));
    setVacinas(lista);
  };

  const abrirFormulario = (vacina = null) => {
    setForm(
      vacina
        ? vacina
        : { id: Date.now().toString(), nome: '', data: '', observacoes: '' }
    );
    setErrors({});
    setVisible(true);
  };

  const fecharFormulario = () => setVisible(false);

  const validar = () => {
    const err = {};
    if (!form.nome) err.nome = 'Nome é obrigatório';
    if (!form.data) err.data = 'Data é obrigatória';
    return err;
  };

  const salvar = async () => {
    const err = validar();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    const index = vacinas.findIndex(v => v.id === form.id);
    let atualizadas = [...vacinas];

    if (index >= 0) {
      atualizadas[index] = form;
    } else {
      atualizadas.push(form);
    }

    await salvarVacinas(atualizadas);
    fecharFormulario();
  };

  const excluir = (id) => {
    Alert.alert('Remover', 'Deseja remover esta vacina?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'OK', onPress: async () => {
          const atualizadas = vacinas.filter(v => v.id !== id);
          await salvarVacinas(atualizadas);
        }
      }
    ]);
  };

  return (
    <>
      <ScrollView style={{ padding: 8 }}>
        {vacinas.map(vacina => (
          <List.Item
            key={vacina.id} // ✅ chave única garantida
            title={vacina.nome}
            description={`Data: ${vacina.data}\n${vacina.observacoes}`}
            onPress={() => abrirFormulario(vacina)}
            right={props => (
              <List.Icon {...props} icon="delete" onPress={() => excluir(vacina.id)} />
            )}
          />
        ))}
      </ScrollView>

      <FAB
        icon="plus"
        style={{ position: 'absolute', bottom: 16, right: 16 }}
        onPress={() => abrirFormulario()}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={fecharFormulario}>
          <Dialog.Title>{form?.id ? 'Editar Vacina' : 'Nova Vacina'}</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Nome da Vacina"
              value={form.nome}
              onChangeText={(text) => setForm({ ...form, nome: text })}
              error={!!errors.nome}
            />
            <HelperText type="error">{errors.nome}</HelperText>

            <Text>Data</Text>
            <MaskedTextInput
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              value={form.data}
              onChangeText={(text) => setForm({ ...form, data: text })}
              keyboardType="numeric"
              style={{ borderBottomWidth: 1, fontSize: 16, marginBottom: 8 }}
            />
            <HelperText type="error">{errors.data}</HelperText>

            <TextInput
              label="Observações"
              value={form.observacoes}
              onChangeText={(text) => setForm({ ...form, observacoes: text })}
              multiline
              numberOfLines={3}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={fecharFormulario}>Cancelar</Button>
            <Button onPress={salvar}>Salvar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}