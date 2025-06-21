import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, useWindowDimensions } from 'react-native';
import styles from '../style/LoginStyles';

export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { width } = useWindowDimensions();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
    } else {
      setError('');
      navigation.navigate('Bienvenida');
    }
  };

  return (
    <View style={[styles.formContainer, { width: width > 500 ? 400 : '90%' }]}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </Pressable>
    </View>
  );
}