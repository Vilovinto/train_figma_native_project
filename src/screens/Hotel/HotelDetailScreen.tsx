import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, FlatList, Dimensions } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { mockHotels } from '../../services/hotelService';
import { StackNavigationProp } from '@react-navigation/stack';
import { HotelStackParamList } from '../../navigation/MainTabNavigator';

const { width } = Dimensions.get('window');

type HotelDetailRouteProp = RouteProp<HotelStackParamList, 'HotelDetail'>;
type NavigationProp = StackNavigationProp<HotelStackParamList, 'HotelDetail'>;

const HotelDetailScreen = () => {
  const route = useRoute<HotelDetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const hotelId = route.params?.hotelId;
  const hotel = mockHotels.find((h) => h.id === hotelId);

  if (!hotel) {
    return <View style={styles.center}><Text>Готель не знайдено</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Фото готелю (горизонтальний скрол) */}
      <FlatList
        data={hotel.fotoHotel}
        keyExtractor={(item, idx) => item + idx}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 16 }}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
      <Text style={styles.name}>{hotel.namaHotel}</Text>
      <Text style={styles.category}>{hotel.kategoriHotel}</Text>
      <Text style={styles.location}>{hotel.lokasiHotel}</Text>
      <Text style={styles.sectionTitle}>Опис</Text>
      <Text style={styles.desc}>{hotel.deskripsiHotel}</Text>
      <Text style={styles.sectionTitle}>Зручності</Text>
      <View style={styles.facilities}>
        {/* Заглушка для зручностей */}
        <Text style={styles.facility}>WiFi</Text>
        <Text style={styles.facility}>Басейн</Text>
        <Text style={styles.facility}>Ресторан</Text>
      </View>
      <Text style={styles.sectionTitle}>Карта</Text>
      <View style={styles.mapStub}>
        <Text style={{ color: '#888' }}>Тут буде карта</Text>
      </View>
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
    width: width * 0.8,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
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
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 6,
    color: '#222',
  },
  desc: {
    fontSize: 15,
    color: '#222',
    marginBottom: 8,
  },
  facilities: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  facility: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 14,
    color: '#6C3DD1',
    marginRight: 8,
  },
  mapStub: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HotelDetailScreen; 