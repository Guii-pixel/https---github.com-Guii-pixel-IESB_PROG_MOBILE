import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { getProductsByCategory } from './api';  // ajuste o caminho

export default function ProductsScreen({ route, navigation }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const prods = await getProductsByCategory(category);
        setProducts(prods);
      } catch (error) {
        alert('Erro ao carregar produtos');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>{category}</Text>
      {loading ? (
        <Text>Carregando produtos...</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}
              onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
            >
              <Image source={{ uri: item.thumbnail }} style={{ width: 80, height: 80, marginRight: 15, borderRadius: 8 }} />
              <View>
                <Text style={{ fontSize: 18 }}>{item.title}</Text>
                <Text>R$ {item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}