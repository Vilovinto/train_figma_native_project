import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { mockHotels } from '../../services/hotelService';

const PilihanHotelScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBarWrap}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Arrow_Left.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.cityBlock}>
            <View style={styles.cityRow}>
              <Image source={require('../../assets/images/Location.png')} style={styles.cityIcon} />
              <Text style={styles.cityTextBold}>Jakarta</Text>
            </View>
            <Text style={styles.dateText}>Senin, 11 Jan 2022 - 1 malam - 1 kamar</Text>
          </View>
        </View>
        {/* Tabbar */}
        <View style={styles.tabBar}>
          <View style={styles.tabActive}><Text style={styles.tabActiveText}>Semua</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Best Deals</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Promo</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Paket Hemat</Text></View>
        </View>
      </View>
      {/* Білий блок з закругленими кутами */}
      <View style={styles.whiteBlock}>
        <Text style={styles.sectionTitle}>Pilihan Hotel</Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 32}}>
          {mockHotels.concat(mockHotels, mockHotels).map((item, idx) => (
            <TouchableOpacity
              key={item.id + idx}
              onPress={() => {
                if (item.namaHotel === 'Hotel Satu') {
                  navigation.navigate('HotelDetail', { hotelId: item.id });
                }
              }}
              activeOpacity={0.8}
            >
              <View style={styles.hotelRow}>
                <Image source={item.fotoHotel[0]} style={styles.hotelThumb} />
                <View style={styles.hotelInfo}>
                  <Text style={styles.hotelName}>{item.namaHotel}</Text>
                  <View style={styles.metaRow}>
                    <Image source={require('../../assets/images/Location.png')} style={styles.metaIcon} />
                    <Text style={styles.metaText}>Indonesia</Text>
                  </View>
                  <View style={styles.starsRow}>
                    <Text style={styles.stars}>★★★★☆</Text>
                  </View>
                </View>
                <Text style={styles.hotelPrice}>Rp 1.000.000</Text>
              </View>
            </TouchableOpacity>
          ))}
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
    height: 320,
    paddingBottom: 160,
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
    width: 28, // було 36
    height: 28, // було 36
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8, // було 10
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 10, // було 18
  },
  backIcon: {
    width: 15, // було 19
    height: 15, // було 19
    tintColor: '#7B22D3',
  },
  cityBlock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0, // було 2
  },
  cityIcon: {
    width: 13, // було 19
    height: 13, // було 19
    tintColor: '#fff',
    marginRight: 6, // було 8
  },
  cityTextBold: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14, // було 17
  },
  dateText: {
    color: '#fff',
    fontSize: 10, // було 13
    fontFamily: 'Open Sans',
    marginTop: 0,
    fontWeight: '400',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24, // було 6
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  tabActive: {
    backgroundColor: '#fff',
    borderRadius: 12, // було 16
    paddingHorizontal: 10, // було 16
    paddingVertical: 2, // було 4
    marginRight: 20, // було 12
    minWidth: 33,
    minHeight: 19, // було 23
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActiveText: {
    color: '#7B22D3',
    fontWeight: '400', // було bold
    fontSize: 10,
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
  tab: {
    backgroundColor: 'transparent',
    borderRadius: 12, // було 16
    paddingHorizontal: 10, // було 16
    paddingVertical: 2, // було 4
    marginRight: 20, // було 12
    minWidth: 33,
    minHeight: 19, // було 23
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '400', // було bold
    fontFamily: 'Open Sans',
    textAlign: 'center',
  },
  whiteBlock: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 32,
    paddingTop: 32,
    marginTop: -190, // було -100
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 24,
  },
  hotelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 24,
    padding: 0,
    shadowColor: 'transparent',
    width: '100%',
    minHeight: 90,
  },
  hotelThumb: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 20,
    resizeMode: 'cover',
  },
  hotelInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  hotelName: {
    fontSize: 16, // було 12
    fontWeight: '400',
    color: '#222',
    fontFamily: 'Open Sans',
    marginBottom: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  metaIcon: {
    width: 13,
    height: 13,
    marginRight: 4,
    tintColor: '#7B22D3',
    resizeMode: 'contain',
  },
  metaText: {
    fontSize: 12,
    color: '#7B22D3',
    fontFamily: 'Open Sans',
    marginRight: 8,
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
  hotelPrice: {
    fontSize: 20,
    color: '#7B22D3',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    marginLeft: 16,
    alignSelf: 'center',
  },
});

export default PilihanHotelScreen; 