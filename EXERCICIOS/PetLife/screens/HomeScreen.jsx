import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';
import { getCategories } from './api';  // ajuste o caminho conforme seu projeto

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const lista = await getCategories();
        if (typeof lista[0] === 'object') {
          setCategorias(lista.map(c => ({
            nome: c.name ?? c.slug ?? 'Categoria',
            slug: c.slug ?? c.name
          })));
        } else {
          setCategorias(lista.map(nome => ({ nome, slug: nome })));
        }
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item.slug}
      renderItem={({ item }) => (
        <List.Item
          title={item.nome}
          onPress={() => navigation.navigate('Produtos', { category: item.slug })}
        />
      )}
    />
  );
}