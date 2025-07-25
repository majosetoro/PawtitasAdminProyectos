import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './scr/screens/LoginScreen';
import BienvenidaScreen from './scr/screens/BienvenidaScreen';
import PetScreen from './scr/screens/PetScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bienvenida" component={BienvenidaScreen} />
        <Stack.Screen name="PetScreen" component={PetScreen} options={{ title: 'Registrar Mascota' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}