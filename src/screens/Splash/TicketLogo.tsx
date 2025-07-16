import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface TicketLogoProps {
  source: any;
  style?: StyleProp<ImageStyle>;
}

const TicketLogo: React.FC<TicketLogoProps> = ({ source, style }) => (
  <Image source={source} style={style} resizeMode="contain" />
);

export default TicketLogo; 