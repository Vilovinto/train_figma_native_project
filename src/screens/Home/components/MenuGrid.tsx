import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface MenuGridProps {
  onHotelPress: () => void;
  icons: {
    Bioskop: any;
    Travel: any;
    Pesawat: any;
    Hotel: any;
    Wisata: any;
    Spot: any;
  };
}

const MenuGrid: React.FC<MenuGridProps> = ({ onHotelPress, icons }) => (
  <View style={styles.menuGrid}>
    <View style={styles.menuRow}>
      <View style={styles.menuItem}>
        <View style={styles.menuIconBg}>
          <Image source={icons.Bioskop} style={styles.menuIcon} />
        </View>
        <Text style={styles.menuLabel}>Bioskop</Text>
      </View>
      <View style={styles.menuItem}>
        <View style={styles.menuIconBg}>
          <Image source={icons.Travel} style={styles.menuIcon} />
        </View>
        <Text style={styles.menuLabel}>Travel</Text>
      </View>
      <View style={styles.menuItem}>
        <View style={styles.menuIconBg}>
          <Image source={icons.Pesawat} style={styles.menuIcon} />
        </View>
        <Text style={styles.menuLabel}>Pesawat</Text>
      </View>
    </View>
    <View style={styles.menuRow}>
      <TouchableOpacity style={styles.menuItem} onPress={onHotelPress}>
        <View style={styles.menuIconBg}>
          <Image source={icons.Hotel} style={styles.menuIcon} />
        </View>
        <Text style={styles.menuLabel}>Hotel</Text>
      </TouchableOpacity>
      <View style={styles.menuItem}>
        <View style={styles.menuIconBg}>
          <Image source={icons.Wisata} style={styles.menuIcon} />
        </View>
        <Text style={styles.menuLabel}>Wisata</Text>
      </View>
      <View style={styles.menuItem}>
        <View style={styles.menuIconBg}>
          <Image source={icons.Spot} style={styles.menuIcon} />
        </View>
        <Text style={styles.menuLabel}>Spot</Text>
      </View>
    </View>
  </View>
);

const ICON_BG = '#7B22D3';
const ICON_SIZE = 72;
const ICON_RADIUS = 16;

const styles = StyleSheet.create({
  menuGrid: {
    marginTop: 8,
    marginBottom: 18,
    paddingHorizontal: 24,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
  },
  menuIconBg: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_RADIUS,
    backgroundColor: ICON_BG,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuIcon: {
    width: 39,
    height: 31,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
  menuLabel: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Roboto',
    fontWeight: '300',
    marginTop: 2,
  },
});

export default MenuGrid; 