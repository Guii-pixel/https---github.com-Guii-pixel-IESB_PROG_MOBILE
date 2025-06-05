import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Alert, Image } from 'react-native';
import { List, ActivityIndicator } from 'react-native-paper';

export default function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Palavras-chave para filtrar produtos de petshop (em inglês, pois a API está em inglês)
  const petKeywords = ['dog', 'cat', 'pet', 'animal', 'fish', 'bird'];

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=100');
      const json = await res.json();
      // Filtra produtos cujo título ou categoria contenha palavras relacionadas a petshop
      const filtered = json.products.filter(product => {
        const text = (product.title + ' ' + product.category).toLowerCase();
        return petKeywords.some(keyword => text.includes(keyword));
      });
      setProducts(filtered);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os produtos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <ActivityIndicator animating={true} style={{ marginTop: 20 }} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={`Preço: R$${item.price}`}
            left={props => (
              <Image
                source={{ uri: item.thumbnail }}
                style={{ width: 50, height: 50, borderRadius: 4, marginRight: 8 }}
              />
            )}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
