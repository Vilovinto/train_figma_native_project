import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

type Props = {
  saldo: number;
};

const BalanceCard: React.FC<Props> = ({ saldo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Баланс</Text>
      <Text style={styles.amount}>{saldo} ₴</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginVertical: 12,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  label: {
    color: COLORS.white,
    fontSize: FONTS.size.sm,
    marginBottom: 6,
    fontFamily: FONTS.regular,
  },
  amount: {
    color: COLORS.white,
    fontSize: FONTS.size.xl,
    fontWeight: 'bold',
    fontFamily: FONTS.bold,
  },
});

export default BalanceCard; 