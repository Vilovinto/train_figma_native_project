import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import TopBanner from './components/TopBanner';
import BalanceCard from './components/BalanceCard';
import MenuGrid from './components/MenuGrid';
import PromoBannerScroll from './components/PromoBannerScroll';

const { width, height } = Dimensions.get('window');

const BOY_WIDTH = 120;
const BOY_HEIGHT = 210;
const BOY_TOP = 100;
const BOY_LEFT = 193;
const GIRL_WIDTH = 116;
const GIRL_HEIGHT = 210;
const GIRL_TOP = 100;
const GIRL_LEFT = 320;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5', position: 'relative', overflow: 'visible' }}>
      {/* Фіолетовий фон під усім контентом */}
      <View style={styles.purpleBg} />
      <ScrollView style={{ flex: 1, zIndex: 1 }} showsVerticalScrollIndicator={false}>
        <TopBanner
          ticketIcon={require('../../assets/images/ticket_logo.png')}
          avatar={require('../../assets/images/foto.jpg')}
          discountTitle={'DISKON 30%\nDENGAN BUNGA'}
          percent={'0%'}
          style={{ alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: 24, paddingTop: 32, paddingBottom: 24 }}
        />
        {/* Абсолютно позиціоновані ілюстрації перед білим блоком */}
        <View style={{ position: 'relative', width: '100%', height: 220, zIndex: 2 }}>
          <Image source={require('../../assets/images/boy.png')} style={[styles.person, {
            width: BOY_WIDTH, height: BOY_HEIGHT, top: BOY_TOP, left: BOY_LEFT, zIndex: 2, position: 'absolute',
          }]} />
          <Image source={require('../../assets/images/girl.png')} style={[styles.person, {
            width: GIRL_WIDTH, height: GIRL_HEIGHT, top: GIRL_TOP, left: GIRL_LEFT, zIndex: 2, position: 'absolute',
          }]} />
        </View>
        <View style={[styles.whiteBlock, { zIndex: 3 }]}> {/* Білий блок поверх ілюстрацій */}
          <BalanceCard
            balance={'Rp 5.000.000'}
            walletIcon={require('../../assets/images/Wallet.png')}
            scanIcon={require('../../assets/images/Scan.png')}
          />
          <MenuGrid
            onHotelPress={() => navigation.navigate('HotelList')}
            icons={{
              Bioskop: require('../../assets/images/Bioskop.png'),
              Travel: require('../../assets/images/Travel.png'),
              Pesawat: require('../../assets/images/Pesawat.png'),
              Hotel: require('../../assets/images/Hotel.png'),
              Wisata: require('../../assets/images/Wisata.png'),
              Spot: require('../../assets/images/Spot.png'),
            }}
          />
          <PromoBannerScroll
            banners={[
              {
                image: require('../../assets/images/Pakai_PAYLATER.png'),
                text: 'Pakai PAYLATER',
                percent: '50%',
                bold: 'PAYLATER',
              },
              {
                image: require('../../assets/images/Pakai_PAYLATER.png'),
                text: 'Pakai PAYLATER',
                percent: '50%',
                bold: 'PAYLATER',
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  purpleBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height * 0.5,
    backgroundColor: '#7B22D3',
    zIndex: -1,
  },
  person: {
    resizeMode: 'contain',
  },
  whiteBlock: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 0,
    paddingTop: 32,
    // overflow: 'hidden', // прибрано, щоб не обрізати ілюстрації
    minHeight: width > 400 ? 500 : 400,
    marginTop: -80,
  },
});

export default HomeScreen; 