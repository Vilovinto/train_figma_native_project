import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import BalanceCard from '../../components/user/BalanceCard';
import PromoCard from '../../components/common/PromoCard';
import HotelCard from '../../components/hotel/HotelCard';
import { mockUser } from '../../services/userService';
import { mockPromos } from '../../services/promoService';
import { mockHotels } from '../../services/hotelService';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Головна</Text>
      <BalanceCard saldo={mockUser.saldo} />
      <Text style={styles.sectionTitle}>Промо</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
        {mockPromos.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Популярні готелі</Text>
      {mockHotels.slice(0, 3).map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#222',
  },
});

export default HomeScreen; 