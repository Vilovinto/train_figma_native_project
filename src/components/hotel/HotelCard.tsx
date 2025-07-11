import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Hotel } from '../../types/hotel';

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
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C3DD1',
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
  location: {
    fontSize: 13,
    color: '#444',
  },
});

export default HotelCard; 