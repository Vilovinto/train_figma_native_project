import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { mockHotels } from '../../services/hotelService';
import { StackNavigationProp } from '@react-navigation/stack';
import { HotelStackParamList } from '../../navigation/MainTabNavigator';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <FlatList
        data={hotel.fotoHotel}
        keyExtractor={(item, idx) => item + idx}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageList}
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
        <View style={styles.facility}><Text style={styles.facilityText}>WiFi</Text></View>
        <View style={styles.facility}><Text style={styles.facilityText}>Басейн</Text></View>
        <View style={styles.facility}><Text style={styles.facilityText}>Ресторан</Text></View>
      </View>
      <Text style={styles.sectionTitle}>Карта</Text>
      <View style={styles.mapStub}>
        <Text style={{ color: COLORS.textSecondary }}>Тут буде карта</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('RoomList', { hotelId })}>
        <Text style={styles.btnText}>Дивитись кімнати</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 18,
  },
  imageList: {
    marginBottom: 18,
  },
  image: {
    width: width * 0.8,
    height: 180,
    borderRadius: 16,
    marginRight: 14,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  name: {
    fontSize: FONTS.size.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 4,
    fontFamily: FONTS.bold,
  },
  category: {
    fontSize: FONTS.size.md,
    color: COLORS.textSecondary,
    marginBottom: 2,
    fontFamily: FONTS.regular,
  },
  location: {
    fontSize: FONTS.size.sm,
    color: COLORS.text,
    marginBottom: 10,
    fontFamily: FONTS.regular,
  },
  sectionTitle: {
    fontSize: FONTS.size.lg,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 6,
    color: COLORS.text,
    fontFamily: FONTS.bold,
  },
  desc: {
    fontSize: FONTS.size.md,
    color: COLORS.text,
    marginBottom: 8,
    fontFamily: FONTS.regular,
  },
  facilities: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  facility: {
    backgroundColor: COLORS.background,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 10,
  },
  facilityText: {
    fontSize: FONTS.size.sm,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  mapStub: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 18,
  },
  btnText: {
    color: COLORS.white,
    fontSize: FONTS.size.lg,
    fontWeight: 'bold',
    fontFamily: FONTS.bold,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HotelDetailScreen; 