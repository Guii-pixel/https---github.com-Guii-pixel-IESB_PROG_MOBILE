import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import PetsListScreen from '../screens/PetsListScreen';
import PetFormScreen from '../screens/PetFormScreen';
import VaccinesScreen from '../screens/VaccinesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={HomeScreen} />
      <Stack.Screen name="Produtos" component={ProductsScreen} />
      <Stack.Screen name="DetalhesProduto" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}

function PetsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Meus Pets" component={PetsListScreen} />
      <Stack.Screen name="Cadastrar Pet" component={PetFormScreen} />
      <Stack.Screen name="Vacinas" component={VaccinesScreen} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pets" component={PetsStack} />
        <Tab.Screen name="Loja" component={ProductsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
