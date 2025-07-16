import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const PROMO_BANNER_WIDTH = width - 48;
const PROMO_BANNER_MARGIN = 16;
const CARD_SHADOW = {
  shadowColor: '#000',
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 4,
};

interface PromoBannerScrollProps {
  banners: Array<{
    image: any;
    text: string;
    percent: string;
    bold: string;
  }>;
}

const PromoBannerScroll: React.FC<PromoBannerScrollProps> = ({ banners }) => (
  <View style={styles.promoBannerScrollWrap}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.promoBannerScrollContent}
    >
      {banners.map((banner, idx) => (
        <View
          key={idx}
          style={[styles.promoBanner, idx === 1 && styles.promoBannerSecond]}
        >
          <View style={styles.promoImageWrap}>
            <Image source={banner.image} style={styles.promoImage} />
          </View>
          <View style={styles.promoTextBlock}>
            <Text style={styles.promoText}>
              Pakai <Text style={styles.promoTextBold}>{banner.bold}</Text>
            </Text>
            <Text style={styles.promoText}>
              Diskon <Text style={styles.promoTextPercent}>{banner.percent}</Text>
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  promoBannerScrollWrap: {
    marginBottom: 32,
    marginTop: 8,
    overflow: 'visible',
  },
  promoBannerScrollContent: {
    paddingLeft: 24,
    paddingRight: 0,
    alignItems: 'center',
  },
  promoBanner: {
    backgroundColor: '#7B22D3',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    width: PROMO_BANNER_WIDTH,
    ...CARD_SHADOW,
    marginRight: PROMO_BANNER_MARGIN,
    overflow: 'hidden',
  },
  promoBannerSecond: {
    marginRight: 0,
  },
  promoImageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 90,
    maxWidth: 140,
    overflow: 'hidden',
    marginRight: 8,
  },
  promoImage: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
  },
  promoTextBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  promoText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  promoTextBold: {
    fontWeight: '700',
    fontSize: 12,
    color: '#fff',
  },
  promoTextPercent: {
    fontWeight: '500',
    fontSize: 48,
    color: '#fff',
  },
});

export default PromoBannerScroll; 