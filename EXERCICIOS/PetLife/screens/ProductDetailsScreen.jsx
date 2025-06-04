import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';
import { getProductById } from './api';  // ajuste o caminho

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduto(data);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <ActivityIndicator animating={true} style={{ marginTop: 50 }} />;
  }

  if (!produto) {
    return <Text style={{ margin: 16 }}>Produto não encontrado.</Text>;
  }

  return (
    <ScrollView>
      <Card style={{ margin: 16 }}>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Title title={produto.title} subtitle={`Marca: ${produto.brand}`} />
        <Card.Content>
          <Text style={{ marginBottom: 8 }}>{produto.description}</Text>
          <Text>Preço: R$ {produto.price}</Text>
          <Text>Categoria: {produto.category}</Text>
          <Text>Estoque: {produto.stock} unidades</Text>
          <Text>Avaliação: {produto.rating} ⭐</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}