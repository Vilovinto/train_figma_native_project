import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ViewStyle } from 'react-native';

const { width } = Dimensions.get('window');

interface TopBannerProps {
  ticketIcon: any;
  avatar: any;
  discountTitle: string;
  percent: string;
  style?: ViewStyle;
}

const TopBanner: React.FC<TopBannerProps> = ({
  ticketIcon,
  avatar,
  discountTitle,
  percent,
  style,
}) => (
  <View style={[styles.topBanner, style]}>
    <Image source={ticketIcon} style={styles.ticketIcon} />
    <View style={styles.bannerTextBlock}>
      <Text style={styles.discountTitle}>{discountTitle}</Text>
      <Text style={styles.percent}>{percent}</Text>
    </View>
    <Image source={avatar} style={styles.avatar} />
  </View>
);

const styles = StyleSheet.create({
  topBanner: {
    backgroundColor: '#7B22D3',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 18,
    // minHeight: height * 0.36, // видалено, щоб висота була лише під текст
    width: '100%',
    position: 'relative',
    overflow: 'visible',
  },
  ticketIcon: {
    position: 'absolute',
    top: 28,
    left: 28,
    width: 24,
    height: 18,
    zIndex: 2,
  },
  bannerTextBlock: {
    marginTop: 40,
    marginLeft: 0,
    alignItems: 'flex-start',
  },
  discountTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Roboto',
    marginBottom: 4,
  },
  percent: {
    color: '#fff',
    fontSize: 56,
    fontWeight: '500',
    fontFamily: 'Roboto',
    marginTop: 0,
  },
  avatar: {
    position: 'absolute',
    top: 18,
    right: 18,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 4,
  },
  // peopleBlock: { display: 'none' },
  // person1: {},
  // person2: {},
});

export default TopBanner; 