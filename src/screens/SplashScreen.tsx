import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoBlock}>
      {/* Логотип-квиток */}
      <Image
        source={require('../assets/images/ticket_logo.png')}
        style={styles.ticketLogo}
        resizeMode="contain"
      />
      {/* Текст з літаком */}
      <View style={styles.textRow}>
        <Text style={styles.textLeft}>T</Text>
        <Image
          source={require('../assets/images/plane_icon.png')}
          style={styles.planeIcon}
          resizeMode="contain"
        />
        <Text style={styles.textRight}>CKETIN</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B22D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBlock: {
    alignItems: 'center',
    width: 238,
  },
  ticketLogo: {
    width: 238,
    height: 105,
    marginBottom: 10,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
  },
  textLeft: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 48,
    color: '#fff',
    letterSpacing: 0,
  },
  planeIcon: {
    width: 45,
    height: 45,
    marginHorizontal: 2,
  },
  textRight: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 48,
    color: '#fff',
    letterSpacing: 0,
  },
});

export default SplashScreen; 