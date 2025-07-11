import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { mockPromos } from '../../services/promoService';
import PromoCard from '../../components/common/PromoCard';

const PromoScreen = () => {
  return (
    <ScrollView style={styles.container}>
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
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 16,
  },
  cardWrapper: {
    marginBottom: 16,
    alignItems: 'center',
  },
  empty: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
  },
});

export default PromoScreen; 