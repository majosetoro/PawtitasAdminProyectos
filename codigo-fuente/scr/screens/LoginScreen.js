import React from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';
import styles from '../style/LoginStyles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.pawtitas}>PAWTITAS</Text>
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
}