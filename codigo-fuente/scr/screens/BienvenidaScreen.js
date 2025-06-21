import React from 'react';
import { View, Text, Button } from 'react-native';

export default function BienvenidaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>¡Bienvenido a Pawtitas!</Text>
      <Button
        title="Registrar Mascota"
        onPress={() => navigation.navigate('PetScreen')}
      />
    </View>
  );
}