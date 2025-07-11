import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { mockRooms } from '../../services/roomService';
import { HotelStackParamList } from '../../navigation/MainTabNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

// Тип для параметрів навігації
 type RoomDetailRouteProp = RouteProp<HotelStackParamList, 'RoomDetail'>;
 type NavigationProp = StackNavigationProp<HotelStackParamList, 'RoomDetail'>;

const RoomDetailScreen = () => {
  const route = useRoute<RoomDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const roomId = route.params?.roomId;
  const room = mockRooms.find((r) => r.id === roomId);

  if (!room) {
    return <View style={styles.center}><Text>Кімната не знайдена</Text></View>;
  }

  const handleBook = () => {
    navigation.navigate('BookingConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{room.namaKamar}</Text>
      <View style={styles.infoBlock}>
        <Text style={styles.label}>Ціна:</Text>
        <Text style={styles.value}>{room.hargaKamar} ₴</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.label}>Рейтинг:</Text>
        <Text style={styles.value}>{room.rating}</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.label}>В наявності:</Text>
        <Text style={styles.value}>{room.stokKamar}</Text>
      </View>
      <TouchableOpacity style={styles.bookBtn} onPress={handleBook}>
        <Text style={styles.bookBtnText}>Забронювати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 24,
    textAlign: 'center',
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  value: {
    fontSize: 16,
    color: '#222',
    fontWeight: 'bold',
  },
  bookBtn: {
    backgroundColor: '#6C3DD1',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 32,
  },
  bookBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RoomDetailScreen; 