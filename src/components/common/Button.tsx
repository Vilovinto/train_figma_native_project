import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

type Props = {
  title: string;
  onPress: () => void;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

const Button: React.FC<Props> = ({ title, onPress, color, disabled, loading, style }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: color || COLORS.primary }, disabled && styles.btnDisabled, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.btnText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  btnDisabled: {
    backgroundColor: COLORS.textSecondary,
  },
  btnText: {
    color: '#fff',
    fontSize: FONTS.size.md,
    fontWeight: 'bold',
    fontFamily: FONTS.bold,
  },
});

export default Button; 