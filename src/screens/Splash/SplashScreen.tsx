import React from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import TicketLogo from './TicketLogo';
import LogoTextRow from './LogoTextRow';

interface SplashScreenProps {
  ticketLogo?: ImageSourcePropType;
  planeIcon?: ImageSourcePropType;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  ticketLogo = require('../../assets/images/ticket_logo.png'),
  planeIcon = require('../../assets/images/plane_icon.png'),
}) => (
  <View style={styles.container}>
    <View style={styles.logoBlock}>
      <TicketLogo source={ticketLogo} style={styles.ticketLogo} />
      <LogoTextRow planeIcon={planeIcon} />
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
});

export default SplashScreen; 