import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* Тут можна додати логотип, якщо є */}
      <Text style={styles.logo}>🎟️</Text>
      <Text style={styles.title}>Ticketin</Text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C3DD1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default SplashScreen; 