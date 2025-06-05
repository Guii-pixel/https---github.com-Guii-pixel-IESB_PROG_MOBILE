import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import PetListScreen from './screens/PetListScreen';
import PetFormScreen from './screens/PetFormScreen';
import SupplierListScreen from './screens/SupplierListScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProductListScreen from './screens/ProductListScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Início" component={HomeScreen} />
      <Stack.Screen name="Cadastrar Pet" component={PetFormScreen} />
      <Stack.Screen name="Pets Cadastrados" component={PetListScreen} />
      <Stack.Screen name="Fornecedores" component={SupplierListScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Produtos" component={ProductListScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Menu" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
