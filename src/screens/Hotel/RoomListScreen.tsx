import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute, NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { mockRooms } from '../../services/roomService';
import { mockHotels } from '../../services/hotelService';

const RoomListScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<{ params: { hotelId?: string } }, 'params'>>();
  // Отримуємо hotelId з параметрів навігації, якщо він є
  const hotelId = route.params?.hotelId || mockHotels[0]?.id;
  const hotel = mockHotels.find(h => h.id === hotelId);
  const rooms = hotel ? mockRooms.filter(r => r.hotelId === hotel.id) : [];

  if (!hotel) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hotel not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBarWrap}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Arrow_Left.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.cityBlock}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
              <Image source={require('../../assets/images/Location.png')} style={{ width: 16, height: 16, tintColor: '#fff', marginRight: 6 }} />
              <Text style={styles.topBarTitle}>Pilih Kamar</Text>
            </View>
            <Text style={styles.topBarSubtitle}>{hotel.namaHotel}</Text>
          </View>
        </View>
        {/* Tabbar */}
        <View style={styles.tabBar}>
          <View style={styles.tabActive}><Text style={styles.tabActiveText}>Wifi</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Sarapan</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Kasur Twin</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Non Smoking</Text></View>
        </View>
      </View>
      {/* Білий блок з закругленими кутами */}
      <View style={styles.whiteBlock}>
        <Text style={styles.sectionTitle}>Pilihan Kamar</Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 32}}>
          {rooms.length === 0 ? (
            <Text>No rooms available</Text>
          ) : (
            rooms.map((room, idx) => (
              <TouchableOpacity key={room.id || idx} onPress={() => navigation.navigate('Payment', { roomId: room.id })}>
                <View style={styles.roomRow}>
                  <Image source={room.image} style={styles.roomThumb} />
                  <View style={styles.roomInfo}>
                    <Text style={styles.roomName}>{room.namaKamar}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                      <Image source={require('../../assets/images/Location.png')} style={{ width: 14, height: 14, tintColor: room.statusColor, marginRight: 4 }} />
                      <Text style={[styles.roomStatus, { color: room.statusColor }]}>{room.statusText}</Text>
                    </View>
                    <View style={styles.starsRow}>
                      <Text style={styles.stars}>★★★★☆</Text>
                    </View>
                  </View>
                  <Text style={styles.roomPrice}>Rp {room.hargaKamar.toLocaleString('id-ID')}</Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  topBarWrap: {
    backgroundColor: '#7B22D3',
    height: 180,
    paddingBottom: 0,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 20,
  },
  backBtn: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 10,
  },
  backIcon: {
    width: 15,
    height: 15,
    tintColor: '#7B22D3',
  },
  cityBlock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  topBarTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Open Sans',
    marginBottom: 0,
  },
  topBarSubtitle: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    marginLeft: 22,
    marginTop: -2,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  tabActive: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 71,
    height: 23,
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActiveText: {
    color: '#7B22D3',
    fontWeight: '400',
    fontSize: 11,
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
  tab: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 71,
    height: 23,
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#7B22D3',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
  whiteBlock: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -50,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  roomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 16,
    padding: 0,
    shadowColor: 'transparent',
    width: '100%',
    minHeight: 80,
  },
  roomThumb: {
    width: 72,
    height: 72,
    borderRadius: 16,
    marginRight: 16,
    resizeMode: 'cover',
  },
  roomInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  roomName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#222',
    fontFamily: 'Open Sans',
    marginBottom: 2,
  },
  roomStatus: {
    fontSize: 8,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    // color задається inline
    marginBottom: 0,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  stars: {
    color: '#FFC107',
    fontSize: 16,
    marginLeft: 0,
  },
  roomPrice: {
    color: '#7B22D3',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Open Sans',
    marginLeft: 12,
  },
});

export default RoomListScreen; 