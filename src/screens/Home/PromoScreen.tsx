import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { mockPromos } from '../../services/promoService';
import PromoCard from '../../components/common/PromoCard';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const PromoScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Промо-акції</Text>
      {mockPromos.length === 0 ? (
        <Text style={styles.empty}>Промо-акцій немає</Text>
      ) : (
        mockPromos.map((promo) => (
          <View key={promo.id} style={styles.cardWrapper}>
            <PromoCard promo={promo} />
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 18,
  },
  header: {
    fontSize: FONTS.size.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 18,
    fontFamily: FONTS.bold,
  },
  cardWrapper: {
    marginBottom: 18,
    alignItems: 'center',
  },
  empty: {
    fontSize: FONTS.size.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 32,
    fontFamily: FONTS.regular,
  },
});

export default PromoScreen; 