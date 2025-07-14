import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { useAuth } from '../../store/AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError('Некоректний email');
      return;
    }
    if (password.length < 6) {
      setError('Пароль має містити мінімум 6 символів');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login();
      Alert.alert('Вхід успішний!');
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вхід</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        error={error && !validateEmail(email) ? error : ''}
      />
      <Input
        label="Пароль"
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        secureTextEntry
        error={error && password.length < 6 ? error : ''}
      />
      <Button title="Увійти" onPress={handleLogin} loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: FONTS.size.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 28,
    textAlign: 'center',
    fontFamily: FONTS.bold,
  },
});

export default LoginScreen; 