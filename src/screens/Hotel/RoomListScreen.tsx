import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { mockRooms } from '../../services/roomService';
import { mockHotels } from '../../services/hotelService';
import { HotelStackParamList } from '../../navigation/MainTabNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

// Тип для параметрів навігації
 type RoomListRouteProp = RouteProp<HotelStackParamList, 'RoomList'>;
 type NavigationProp = StackNavigationProp<HotelStackParamList, 'RoomList'>;

const RoomListScreen = () => {
  const route = useRoute<RoomListRouteProp>();
  const navigation = useNavigation<NavigationProp>();
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
        <Text style={styles.empty}>Немає доступних кімнат</Text>
      ) : (
        rooms.map((room) => (
          <View key={room.id} style={styles.roomCard}>
            <View style={styles.roomInfo}>
              <Text style={styles.roomName}>{room.namaKamar}</Text>
              <Text style={styles.price}>Ціна: {room.hargaKamar} ₴</Text>
              <Text style={styles.rating}>Рейтинг: {room.rating}</Text>
              <Text style={styles.stock}>В наявності: {room.stokKamar}</Text>
            </View>
            <TouchableOpacity
              style={styles.detailBtn}
              onPress={() => navigation.navigate('RoomDetail', { roomId: room.id })}
            >
              <Text style={styles.detailBtnText}>Деталі</Text>
            </TouchableOpacity>
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
  roomCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  roomInfo: {
    flex: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#6C3DD1',
  },
  price: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  rating: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  stock: {
    fontSize: 14,
    color: '#444',
    marginBottom: 2,
  },
  detailBtn: {
    backgroundColor: '#6C3DD1',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginLeft: 12,
  },
  detailBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  empty: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RoomListScreen; 