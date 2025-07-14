import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ICON_BG = '#7B22D3';
const ICON_SIZE = 72;
const ICON_RADIUS = 16;
const CARD_RADIUS = 18;
const CARD_SHADOW = {
  shadowColor: '#000',
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 4,
};

const PROMO_BANNER_WIDTH = width - 48;
const PROMO_BANNER_MARGIN = 16;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Top Banner */}
        <View style={styles.topBanner}>
          <Image source={require('../../assets/images/ticket_logo.png')} style={styles.ticketIcon} />
          <View style={styles.bannerTextBlock}>
            <Text style={styles.discountTitle}>DISKON 30%{"\n"}DENGAN BUNGA</Text>
            <Text style={styles.percent}>0%</Text>
          </View>
          <Image source={require('../../assets/images/foto.jpg')} style={styles.avatar} />
          <View style={styles.peopleBlock}>
            <Image source={require('../../assets/images/boy.png')} style={styles.person1} />
            <Image source={require('../../assets/images/girl.png')} style={styles.person2} />
          </View>
        </View>

        {/* Overlay Balance Card */}
        <View style={styles.balanceCardWrap}>
          <View style={styles.balanceCard}>
            <View style={styles.balanceHalf}>
              <View style={styles.balanceLeftContent}>
                <Image source={require('../../assets/images/Wallet.png')} style={styles.walletIcon} />
                <Text style={styles.balanceText}>Rp 5.000.000</Text>
              </View>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.balanceHalf}>
              <View style={styles.balanceRightContent}>
                <Image source={require('../../assets/images/Scan.png')} style={styles.scanIcon} />
                <Text style={styles.scanText}>SCAN</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuGrid}>
          <View style={styles.menuRow}>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBg}>
                <Image source={require('../../assets/images/Bioskop.png')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Bioskop</Text>
            </View>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBg}>
                <Image source={require('../../assets/images/Travel.png')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Travel</Text>
            </View>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBg}>
                <Image source={require('../../assets/images/Pesawat.png')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Pesawat</Text>
            </View>
          </View>
          <View style={styles.menuRow}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HotelList')}>
              <View style={styles.menuIconBg}>
                <Image source={require('../../assets/images/Hotel.png')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Hotel</Text>
            </TouchableOpacity>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBg}>
                <Image source={require('../../assets/images/Wisata.png')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Wisata</Text>
            </View>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBg}>
                <Image source={require('../../assets/images/Spot.png')} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuLabel}>Spot</Text>
            </View>
          </View>
        </View>

        {/* Promo Banner — горизонтальний скрол */}
        <View style={styles.promoBannerScrollWrap}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promoBannerScrollContent}
          >
            {/* Перший банер */}
            <View style={styles.promoBanner}>
              <View style={styles.promoImageWrap}>
                <Image source={require('../../assets/images/Pakai_PAYLATER.png')} style={styles.promoImage} />
              </View>
              <View style={styles.promoTextBlock}>
                <Text style={styles.promoText}>Pakai <Text style={styles.promoTextBold}>PAYLATER</Text></Text>
                <Text style={styles.promoText}>Diskon <Text style={styles.promoTextPercent}>50%</Text></Text>
              </View>
            </View>
            {/* Другий банер — частково видимий справа */}
            <View style={[styles.promoBanner, styles.promoBannerSecond]}>
              <View style={styles.promoImageWrap}>
                <Image source={require('../../assets/images/Pakai_PAYLATER.png')} style={styles.promoImage} />
              </View>
              <View style={styles.promoTextBlock}>
                <Text style={styles.promoText}>Pakai <Text style={styles.promoTextBold}>PAYLATER</Text></Text>
                <Text style={styles.promoText}>Diskon <Text style={styles.promoTextPercent}>50%</Text></Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBanner: {
    backgroundColor: '#7B22D3',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: 18,
    paddingBottom: 32,
    paddingHorizontal: 18,
    minHeight: 220,
    position: 'relative',
    overflow: 'visible',
  },
  ticketIcon: {
    position: 'absolute',
    top: 18,
    left: 18,
    width: 19,
    height: 14,
    zIndex: 2,
  },
  bannerTextBlock: {
    marginTop: 32,
    marginLeft: 38,
  },
  discountTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Roboto',
    marginBottom: 4,
  },
  percent: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '500',
    fontFamily: 'Roboto',
    marginTop: 0,
  },
  avatar: {
    position: 'absolute',
    top: 18,
    right: 18,
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 2,
  },
  peopleBlock: {
    position: 'absolute',
    flexDirection: 'row',
    top: 32,
    right: 32,
    width: 171,
    height: 156,
    zIndex: 1,
  },
  person1: {
    width: 84,
    height: 156,
  },
  person2: {
    width: 87,
    height: 155,
    marginLeft: 0,
  },
  balanceCardWrap: {
    width: width,
    alignItems: 'center',
    marginTop: -40,
    marginBottom: 24,
    zIndex: 10,
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: CARD_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 48,
    minHeight: 62,
    paddingVertical: 12,
    paddingHorizontal: 0,
    ...CARD_SHADOW,
  },
  balanceHalf: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletIcon: {
    width: 26,
    height: 23.4,
    marginRight: 8,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#7B22D3',
  },
  verticalLine: {
    width: 2,
    height: 48,
    backgroundColor: '#7B22D3',
    marginVertical: 0,
    borderRadius: 1,
  },
  scanIcon: {
    width: 35,
    height: 28.6,
    marginRight: 8,
  },
  scanText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#7B22D3',
    textAlign: 'center',
  },
  menuGrid: {
    marginTop: 8,
    marginBottom: 18,
    paddingHorizontal: 24,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
  },
  menuIconBg: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_RADIUS,
    backgroundColor: ICON_BG,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuIcon: {
    width: 39,
    height: 31,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
  menuLabel: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Roboto',
    fontWeight: '300',
    marginTop: 2,
  },
  promoBannerScrollWrap: {
    marginBottom: 32,
    marginTop: 8,
    overflow: 'visible',
  },
  promoBannerScrollContent: {
    paddingLeft: 24,
    paddingRight: 0,
    alignItems: 'center',
  },
  promoBanner: {
    backgroundColor: '#7B22D3',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    width: PROMO_BANNER_WIDTH,
    ...CARD_SHADOW,
    marginRight: PROMO_BANNER_MARGIN,
    overflow: 'hidden',
  },
  promoBannerSecond: {
    marginRight: 0,
  },
  promoImageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 90,
    maxWidth: 140,
    overflow: 'hidden',
    marginRight: 8,
  },
  promoImage: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
  },
  promoTextBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  promoText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  promoTextBold: {
    fontWeight: '700',
    fontSize: 12,
    color: '#fff',
  },
  promoTextPercent: {
    fontWeight: '500',
    fontSize: 48,
    color: '#fff',
  },
});

export default HomeScreen; 