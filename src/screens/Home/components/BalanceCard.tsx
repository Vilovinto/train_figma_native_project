import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_RADIUS = 18;
const CARD_SHADOW = {
  shadowColor: '#000',
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 4,
};

interface BalanceCardProps {
  balance: string;
  walletIcon: any;
  scanIcon: any;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, walletIcon, scanIcon }) => (
  <View style={styles.balanceCardWrap}>
    <View style={styles.balanceCard}>
      <View style={styles.balanceHalf}>
        <View style={styles.balanceLeftContent}>
          <Image source={walletIcon} style={styles.walletIcon} />
          <Text style={styles.balanceText}>{balance}</Text>
        </View>
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.balanceHalf}>
        <View style={styles.balanceRightContent}>
          <Image source={scanIcon} style={styles.scanIcon} />
          <Text style={styles.scanText}>SCAN</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
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
});

export default BalanceCard; 