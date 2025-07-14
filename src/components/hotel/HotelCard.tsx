import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Hotel } from '../../types/hotel';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

type Props = {
  hotel: Hotel;
  onPress: () => void;
};

const HotelCard: React.FC<Props> = ({ hotel, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: hotel.fotoHotel[0] }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{hotel.namaHotel}</Text>
        <Text style={styles.category}>{hotel.kategoriHotel}</Text>
        <Text style={styles.location}>{hotel.lokasiHotel}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    flexDirection: 'row',
    padding: 14,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 12,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: FONTS.size.lg,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  category: {
    fontSize: FONTS.size.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
    marginBottom: 2,
    fontFamily: FONTS.regular,
  },
  location: {
    fontSize: FONTS.size.xs,
    color: COLORS.text,
    fontFamily: FONTS.regular,
  },
});

export default HotelCard; 