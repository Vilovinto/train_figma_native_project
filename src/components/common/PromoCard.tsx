import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Promo } from '../../types/promo';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

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
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
    alignItems: 'center',
    width: 180,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 156,
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: FONTS.size.sm,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: FONTS.bold,
  },
});

export default PromoCard; 