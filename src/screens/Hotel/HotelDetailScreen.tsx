import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { mockHotels } from '../../services/hotelService';
import { StackNavigationProp } from '@react-navigation/stack';
import { HotelStackParamList } from '../../navigation/MainTabNavigator';

// Тип для параметрів навігації (можна винести у types)
type HotelDetailRouteProp = RouteProp<HotelStackParamList, 'HotelDetail'>;

type NavigationProp = StackNavigationProp<HotelStackParamList, 'HotelDetail'>;

const HotelDetailScreen = () => {
  const route = useRoute<HotelDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  // Отримуємо id готелю з параметрів навігації
  const hotelId = route.params?.hotelId;
  const hotel = mockHotels.find((h) => h.id === hotelId);

  if (!hotel) {
    return <View style={styles.center}><Text>Готель не знайдено</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: hotel.fotoHotel[0] }} style={styles.image} />
      <Text style={styles.name}>{hotel.namaHotel}</Text>
      <Text style={styles.category}>{hotel.kategoriHotel}</Text>
      <Text style={styles.location}>{hotel.lokasiHotel}</Text>
      <Text style={styles.desc}>{hotel.deskripsiHotel}</Text>
      <Button title="Дивитись кімнати" onPress={() => navigation.navigate('RoomList', { hotelId })} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: '#888',
    marginBottom: 2,
  },
  location: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
  },
  desc: {
    fontSize: 15,
    color: '#222',
    marginBottom: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HotelDetailScreen; 