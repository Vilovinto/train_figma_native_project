import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Promo } from '../../types/promo';

type Props = {
  promo: Promo;
};

const PromoCard: React.FC<Props> = ({ promo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: promo.gambar }} style={styles.image} />
      <Text style={styles.title}>{promo.judul}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    alignItems: 'center',
    width: 180,
    elevation: 2,
  },
  image: {
    width: 160,
    height: 70,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6C3DD1',
    textAlign: 'center',
  },
});

export default PromoCard; 