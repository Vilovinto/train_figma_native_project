import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList, Dimensions, Platform, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { mockHotels } from '../../services/hotelService';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HotelListScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [search, setSearch] = useState('');
  // Фільтрація за пошуком (опціонально)
  const filteredHotels = mockHotels.filter(hotel =>
    hotel.namaHotel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Top Search Block */}
        <View style={styles.topBlock}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Arrow_Left.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.topTitleCentered}>Pesan Kamar Hotel</Text>
          <View style={styles.inputRow}>
            <Image source={require('../../assets/images/Location.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Ketik Kota / Nama Hotel"
              placeholderTextColor="#B9B9B9"
              value={search}
              onChangeText={setSearch}
            />
            <Image source={require('../../assets/images/Arrow_Down.png')} style={styles.inputArrowRight} />
          </View>
          <View style={styles.inputRowDouble}>
            <View style={styles.inputHalf}>
              <Image source={require('../../assets/images/Calendar_gray.png')} style={styles.inputIcon} />
              <Text style={styles.inputText}>Check in</Text>
              <Image source={require('../../assets/images/Arrow_Down.png')} style={styles.inputArrowRight} />
            </View>
            <View style={styles.inputHalf}>
              <Image source={require('../../assets/images/Calendar_gray.png')} style={styles.inputIcon} />
              <Text style={styles.inputText}>Check out</Text>
              <Image source={require('../../assets/images/Arrow_Down.png')} style={styles.inputArrowRight} />
            </View>
          </View>
          <View style={styles.inputRow}>
            <Image source={require('../../assets/images/2-User.png')} style={styles.inputIcon} />
            <Text style={styles.inputText}>Jumlah Tamu & Kamar</Text>
            <Image source={require('../../assets/images/Arrow_Down.png')} style={styles.inputArrowRight} />
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchBtnText}>Cari hotel</Text>
          </TouchableOpacity>
        </View>

        {/* Best Deals */}
        <Text style={styles.sectionTitle}>Best Deals</Text>
        <FlatList
          data={filteredHotels.slice(0, 2)}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 16, paddingBottom: 8}}
          renderItem={({ item }) => (
            <View style={styles.bestDealCardSmall}>
              <Image source={item.fotoHotel[0]} style={styles.bestDealImageSmall} />
              <View style={styles.bestDealInfoSmall}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={styles.hotelNameSmall}>{item.namaHotel}</Text>
                  <Text style={styles.hotelPriceSmall}>Rp 1.000.000</Text>
                </View>
                <View style={styles.metaRow}>
                  <Text style={styles.starsSmall}>★★★★☆</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                    <Image source={require('../../assets/images/Location.png')} style={styles.metaIconSmall} />
                    <Text style={styles.metaTextSmall}>Indonesia</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        {/* Pilihan Hotel */}
        <TouchableOpacity onPress={() => navigation.navigate('PilihanHotel')}>
          <Text style={styles.sectionTitle}>Pilihan Hotel</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
        {filteredHotels.map((item) => (
          <View style={styles.hotelRowSmall} key={item.id}>
            <Image source={item.fotoHotel[0]} style={styles.hotelThumbSmall} />
            <View style={styles.hotelInfoSmall}>
              <Text style={styles.hotelNameSmall}>{item.namaHotel}</Text>
              <View style={styles.metaRow}>
                <Image source={require('../../assets/images/Location.png')} style={styles.metaIconSmall} />
                <Text style={styles.metaTextSmall}>Indonesia</Text>
                <Text style={[styles.starsSmall, { marginLeft: 8 }]}>★★★★☆</Text>
              </View>
            </View>
            <Text style={styles.hotelPriceSmall}>Rp 1.000.000</Text>
          </View>
        ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CARD_RADIUS = 16;
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F6F6', // фон як у Figma
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  topBlock: {
    backgroundColor: '#7B22D3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 18,
    marginBottom: 0,
    minHeight: 170,
  },
  backBtn: {
    position: 'absolute',
    top: 32,
    left: 16,
    zIndex: 10,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
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
  topTitleCentered: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    marginBottom: 18,
    textAlign: 'center',
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 37,
    marginBottom: 12,
    position: 'relative',
  },
  inputRowDouble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  inputHalf: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 37,
    marginRight: 8,
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#222',
    fontFamily: 'Open Sans',
  },
  inputIcon: {
    width: 19,
    height: 19,
    marginRight: 8,
    resizeMode: 'contain',
    tintColor: '#7B22D3',
  },
  inputText: {
    fontSize: 14,
    color: '#B9B9B9',
    fontFamily: 'Open Sans',
  },
  inputArrow: {
    width: 10,
    height: 8,
    marginLeft: 6,
    resizeMode: 'contain',
    tintColor: '#7B22D3',
  },
  inputArrowRight: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: -4,
    width: 10,
    height: 8,
    resizeMode: 'contain',
    tintColor: '#7B22D3',
  },
  searchBtn: {
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  searchBtnText: {
    color: '#7B22D3',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 12,
  },
  bestDealsList: {
    paddingLeft: 16,
    paddingBottom: 8,
  },
  bestDealCard: {
    width: 344,
    height: 190,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderWidth: 0, // без рамки
  },
  bestDealImage: {
    width: '100%',
    height: 108,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bestDealInfo: {
    padding: 12,
  },
  bestDealName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  bestDealPrice: {
    fontSize: 16,
    color: '#7B22D3',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bestDealMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
    tintColor: '#7B22D3',
    resizeMode: 'contain',
  },
  metaText: {
    fontSize: 12,
    color: '#7B22D3',
  },
  hotelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 18,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 0, // без рамки
  },
  hotelThumb: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
  },
  hotelInfo: {
    flex: 1,
  },
  hotelName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  hotelMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  stars: {
    color: '#FFC107',
    fontSize: 14,
    marginLeft: 2,
  },
  hotelPrice: {
    fontSize: 16,
    color: '#7B22D3',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  bestDealInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  bestDealStarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  bestDealCardSmall: {
    width: 210,
    height: 105,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexDirection: 'column',
  },
  bestDealImageSmall: {
    width: '100%',
    height: 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
  },
  bestDealInfoSmall: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    flex: 1,
    justifyContent: 'center',
  },
  bestDealInfoRowSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  bestDealNameSmall: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222',
  },
  bestDealPriceSmall: {
    fontSize: 13,
    color: '#7B22D3',
    fontWeight: 'bold',
  },
  bestDealStarsRowSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  starsSmall: {
    color: '#FFC107',
    fontSize: 12,
    marginLeft: 0,
  },
  bestDealMetaSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  metaIconSmall: {
    width: 12,
    height: 12,
    marginRight: 2,
    tintColor: '#7B22D3',
    resizeMode: 'contain',
  },
  metaTextSmall: {
    fontSize: 10,
    color: '#7B22D3',
  },
  hotelRowSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 0,
    marginBottom: 10,
    padding: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    width: 344,
    height: 55,
  },
  hotelThumbSmall: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 8,
    resizeMode: 'cover',
  },
  hotelInfoSmall: {
    flex: 1,
    justifyContent: 'center',
  },
  hotelNameSmall: {
    fontSize: 13,
    fontWeight: '400',
    color: '#222',
    fontFamily: 'Open Sans',
  },
  hotelMetaRowSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  hotelPriceSmall: {
    fontSize: 13,
    color: '#7B22D3',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    marginLeft: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  metaIconSmall: {
    width: 12,
    height: 12,
    marginRight: 2,
    tintColor: '#7B22D3',
    resizeMode: 'contain',
  },
  metaTextSmall: {
    fontSize: 10,
    color: '#7B22D3',
    fontFamily: 'Open Sans',
    marginRight: 8,
  },
  starsSmall: {
    color: '#FFC107',
    fontSize: 12,
    marginLeft: 8,
  },
});

export default HotelListScreen; 