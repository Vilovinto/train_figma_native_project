import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HotelCard from '../../components/hotel/HotelCard';
import SearchInput from '../../components/common/SearchInput';
import { mockHotels } from '../../services/hotelService';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HotelStackParamList } from '../../navigation/MainTabNavigator';

const HotelListScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<StackNavigationProp<HotelStackParamList, 'HotelList'>>();
  const filteredHotels = mockHotels.filter(hotel =>
    hotel.namaHotel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Всі готелі</Text>
      <SearchInput value={search} onChangeText={setSearch} />
      {filteredHotels.length === 0 ? (
        <Text style={styles.empty}>Готелів не знайдено</Text>
      ) : (
        filteredHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onPress={() => navigation.navigate('HotelDetail', { hotelId: hotel.id })}
          />
        ))
      )}
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 12,
  },
  empty: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
  },
});

export default HotelListScreen; 