import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.title}>Бронювання успішне!</Text>
      <Text style={styles.desc}>Дякуємо за бронювання. Деталі можна переглянути в історії бронювань.</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>На головну</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOutline} onPress={() => navigation.navigate('BookingHistory')}>
        <Text style={styles.btnOutlineText}>Історія бронювань</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 60,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 12,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: '#444',
    marginBottom: 32,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#6C3DD1',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 14,
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnOutline: {
    borderColor: '#6C3DD1',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  btnOutlineText: {
    color: '#6C3DD1',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default BookingConfirmationScreen; 