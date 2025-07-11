import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { mockRooms } from '../../services/roomService';
import { mockHotels } from '../../services/hotelService';
import { HotelStackParamList } from '../../navigation/MainTabNavigator';

// Тип для параметрів навігації
 type RoomListRouteProp = RouteProp<HotelStackParamList, 'RoomList'>;

const RoomListScreen = () => {
  const route = useRoute<RoomListRouteProp>();
  const hotelId = route.params?.hotelId;
  const rooms = mockRooms.filter((room) => room.hotelId === hotelId);
  const hotel = mockHotels.find((h) => h.id === hotelId);

  if (!hotel) {
    return <View style={styles.center}><Text>Готель не знайдено</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Кімнати в {hotel.namaHotel}</Text>
      {rooms.length === 0 ? (
        <Text>Немає доступних кімнат</Text>
      ) : (
        rooms.map((room) => (
          <View key={room.id} style={styles.roomCard}>
            <Text style={styles.roomName}>{room.namaKamar}</Text>
            <Text>Ціна: {room.hargaKamar} ₴</Text>
            <Text>В наявності: {room.stokKamar}</Text>
            <Text>Рейтинг: {room.rating}</Text>
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
    marginBottom: 12,
  },
  roomCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RoomListScreen; 