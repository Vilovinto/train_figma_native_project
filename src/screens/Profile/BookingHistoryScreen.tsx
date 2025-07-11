import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useBooking } from '../../store/BookingContext';

const BookingHistoryScreen = () => {
  const { bookings } = useBooking();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Історія бронювань</Text>
      {bookings.length === 0 ? (
        <Text style={styles.empty}>Бронювань немає</Text>
      ) : (
        bookings.map((b) => (
          <View key={b.id} style={styles.card}>
            <Text style={styles.hotel}>{b.hotel}</Text>
            <Text style={styles.room}>Кімната: {b.room}</Text>
            <Text style={styles.date}>Дата: {b.date}</Text>
            <Text style={styles.price}>Ціна: {b.price} ₴</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
  },
  hotel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 2,
  },
  room: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  price: {
    fontSize: 15,
    color: '#222',
    fontWeight: 'bold',
  },
  empty: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
  },
});

export default BookingHistoryScreen; 