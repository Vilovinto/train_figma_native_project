import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = () => {
    if (!validateEmail(email)) {
      setError('Некоректний email');
      return;
    }
    if (password.length < 6) {
      setError('Пароль має містити мінімум 6 символів');
      return;
    }
    if (password !== confirmPassword) {
      setError('Паролі не співпадають');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Реєстрація успішна!');
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Реєстрація</Text>
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
      <Input
        label="Підтвердіть пароль"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Підтвердіть пароль"
        secureTextEntry
        error={error && password !== confirmPassword ? error : ''}
      />
      <Button title="Зареєструватись" onPress={handleRegister} loading={loading} />
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

export default RegisterScreen; 