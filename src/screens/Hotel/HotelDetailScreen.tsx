import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation, useRoute, RouteProp, NavigationProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { mockHotels } from '../../services/hotelService';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  Main: undefined;
  HotelList: undefined;
  PilihanHotel: undefined;
  HotelDetail: { hotelId: string };
};

const HotelDetailScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  // Для прикладу: беремо перший готель (Hotel Satu)
  const hotel = mockHotels[0];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Велике фото */}
      <View style={styles.imageBlock}>
        <Image source={hotel.fotoHotel[0]} style={styles.mainImage} />
        {/* Горизонтальний скрол фото */}
        <View style={styles.photoRow}>
          {[0,1,2,3].map((i) => (
            <Image key={i} source={hotel.fotoHotel[0]} style={styles.photoThumb} />
          ))}
          <View style={styles.photoThumbMore}><Text style={styles.photoThumbMoreText}>10+</Text></View>
        </View>
        {/* Кнопка назад */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('PilihanHotel')}
        >
          <Image source={require('../../assets/images/Arrow_Left.png')} style={styles.backIcon} />
        </TouchableOpacity>
        {/* Фіолетовий блок поверх білого */}
        <View style={styles.infoBarWrap} pointerEvents="box-none">
          <View style={styles.infoBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Image source={require('../../assets/images/Location.png')} style={{ width: 18, height: 18, tintColor: '#fff', marginRight: 6 }} />
              <Text style={styles.infoBarCity}>Jakarta</Text>
            </View>
            <Text style={styles.infoBarText}>Check In{"\n"}11 Jan</Text>
            <Text style={styles.infoBarText}>Check Out{"\n"}12 Jan</Text>
            <Text style={styles.infoBarText}>Jumlah & Kamar{"\n"}2 & 1</Text>
          </View>
        </View>
      </View>
      {/* Білий блок */}
      <View style={styles.whiteBlock}>
        <View style={styles.hotelRow}>
          <View style={styles.hotelNameBlock}>
            <Text style={styles.hotelName}>{hotel.namaHotel}</Text>
            <Text style={styles.stars}>★★★★☆</Text>
          </View>
          <Text style={styles.hotelPrice}>Rp 1.000.000</Text>
        </View>
        {/* Зручності */}
        <View style={styles.facilitiesRow}>
          <View style={styles.facility}><Image source={require('../../assets/images/Wifi.png')} style={styles.facilityIcon} /><Text style={styles.facilityText}>Wifi</Text></View>
          <View style={styles.facility}><Image source={require('../../assets/images/Bath.png')} style={styles.facilityIcon} /><Text style={styles.facilityText}>Bath</Text></View>
          <View style={styles.facility}><Image source={require('../../assets/images/Gym.png')} style={styles.facilityIcon} /><Text style={styles.facilityText}>Gym</Text></View>
          <View style={styles.facility}><Image source={require('../../assets/images/Park.png')} style={styles.facilityIcon} /><Text style={styles.facilityText}>Park</Text></View>
          <View style={styles.facility}><Image source={require('../../assets/images/Restaurant.png')} style={styles.facilityIcon} /><Text style={styles.facilityText}>Restaurant</Text></View>
        </View>
        {/* Опис */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        {/* Карта */}
        <Text style={styles.sectionTitle}>Maps</Text>
        <View style={styles.mapStub}>
          <Image source={require('../../assets/images/map.png')} style={styles.mapImg} />
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('RoomList', { hotelId: hotel.id })}>
            <Text style={styles.btnText}>PILIH KAMAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  imageBlock: {
    position: 'relative',
    width: '100%',
    height: 340,
    marginBottom: 0,
  },
  mainImage: {
    width: '100%',
    height: 340,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    resizeMode: 'cover',
  },
  photoRow: {
    position: 'absolute',
    left: 37,
    bottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoThumb: {
    width: 49,
    height: 49,
    borderRadius: 12,
    marginRight: 20,
    resizeMode: 'cover',
  },
  photoThumbMore: {
    width: 49,
    height: 49,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoThumbMoreText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Open Sans',
  },
  backBtn: {
    position: 'absolute',
    top: 24,
    left: 37,
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  backIcon: {
    width: 19,
    height: 19,
    tintColor: '#7B22D3',
  },
  infoBarWrap: {
    position: 'absolute',
    top: 335,
    left: 37,
    right: 37,
    zIndex: 2,
  },
  infoBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7B22D3',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  infoBarCity: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 10,
    fontFamily: 'Open Sans',
    flex: 1,
    textAlign: 'center',
  },
  infoBarText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    textAlign: 'center',
    flex: 1,
  },
  whiteBlock: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 42,
    paddingTop: 110,
    paddingBottom: 24,
    marginTop: -40,
    overflow: 'hidden',
    position: 'relative',
  },
  hotelRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  hotelNameBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  hotelName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Open Sans',
    marginRight: 8,
  },
  stars: {
    color: '#FFC107',
    fontSize: 14,
    fontFamily: 'Open Sans',
    marginLeft: 0,
  },
  hotelPrice: {
    fontSize: 14,
    color: '#7B22D3',
    fontWeight: '600',
    fontFamily: 'Open Sans',
    alignSelf: 'center',
  },
  facilitiesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 8,
    justifyContent: 'space-between',
  },
  facility: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B22D3',
    borderRadius: 16,
    width: 58,
    height: 53,
    marginRight: 0,
  },
  facilityIcon: {
    width: 24,
    height: 24,
    marginBottom: 6,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  facilityText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 10,
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginTop: 24,
    marginBottom: 8,
    fontFamily: 'Open Sans',
  },
  desc: {
    fontSize: 10,
    color: '#000',
    marginBottom: 16,
    fontFamily: 'Open Sans',
  },
  mapStub: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    height: 142,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  mapImg: {
    width: '100%',
    height: 142,
    resizeMode: 'cover',
  },
  btn: {
    backgroundColor: '#7B22D3',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    alignSelf: 'stretch',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Open Sans',
  },
});

export default HotelDetailScreen; 