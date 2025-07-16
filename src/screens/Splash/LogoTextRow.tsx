import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface LogoTextRowProps {
  planeIcon: ImageSourcePropType;
  textLeftStyle?: any;
  textRightStyle?: any;
  planeIconStyle?: any;
}

const LogoTextRow: React.FC<LogoTextRowProps> = ({
  planeIcon,
  textLeftStyle,
  textRightStyle,
  planeIconStyle,
}) => (
  <View style={styles.textRow}>
    <Text style={[styles.textLeft, textLeftStyle]}>T</Text>
    <Image source={planeIcon} style={[styles.planeIcon, planeIconStyle]} resizeMode="contain" />
    <Text style={[styles.textRight, textRightStyle]}>CKETIN</Text>
  </View>
);

const styles = StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
  },
  textLeft: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 48,
    color: '#fff',
    letterSpacing: 0,
  },
  planeIcon: {
    width: 45,
    height: 45,
    marginHorizontal: 2,
  },
  textRight: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 48,
    color: '#fff',
    letterSpacing: 0,
  },
});

export default LogoTextRow; 