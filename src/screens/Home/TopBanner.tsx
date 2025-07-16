import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface TopBannerProps {
  ticketIcon: any;
  avatar: any;
  person1: any;
  person2: any;
  discountTitle: string;
  percent: string;
}

const TopBanner: React.FC<TopBannerProps> = ({
  ticketIcon,
  avatar,
  person1,
  person2,
  discountTitle,
  percent,
}) => (
  <View style={styles.topBanner}>
    <Image source={ticketIcon} style={styles.ticketIcon} />
    <View style={styles.bannerTextBlock}>
      <Text style={styles.discountTitle}>{discountTitle}</Text>
      <Text style={styles.percent}>{percent}</Text>
    </View>
    <Image source={avatar} style={styles.avatar} />
    <View style={styles.peopleBlock}>
      <Image source={person1} style={styles.person1} />
      <Image source={person2} style={styles.person2} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  // ... стилі з HomeScreen для topBanner, ticketIcon, bannerTextBlock, discountTitle, percent, avatar, peopleBlock, person1, person2
});

export default TopBanner; 