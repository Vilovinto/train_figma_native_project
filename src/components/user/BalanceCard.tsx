import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    backgroundColor: '#6C3DD1',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  amount: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default BalanceCard; 