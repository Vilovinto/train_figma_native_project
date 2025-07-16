import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const banks = [
  { name: 'Bank Mandiri', icon: require('../../assets/images/Mandiri.png') },
  { name: 'Bank BCA', icon: require('../../assets/images/BCA.png') },
  { name: 'Bank BNI', icon: require('../../assets/images/BNI.png') },
  { name: 'Bank Mega', icon: require('../../assets/images/Mega.png') },
];
const virtualAccounts = [
  { name: 'Virtual Account Mandiri', icon: require('../../assets/images/Mandiri.png') },
  { name: 'Virtual Account BCA', icon: require('../../assets/images/BCA.png') },
  { name: 'Virtual Account BNI', icon: require('../../assets/images/BNI.png') },
  { name: 'Virtual Account Mega', icon: require('../../assets/images/Mega.png') },
];
const creditOptions = [
  { name: 'Kredivo', icon: require('../../assets/images/credit_card.png') },
  { name: '< 17 Tahun (S&K BERLAKU)', icon: require('../../assets/images/credit_card.png') },
];

const PaymentScreen = () => {
  const navigation = useNavigation();
  const handleArrowPress = () => navigation.navigate('Terms');
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBarWrap}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Arrow_Left.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Pembayaran</Text>
        </View>
      </View>
      <View style={styles.whiteBlock}>
        <Text style={styles.timerText}>
          <Text style={{ color: '#B47AEA' }}>Selesaikan pemesanan dalam </Text>
          <Text style={styles.timerRed}>00:60:00</Text>
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Transfer Bank</Text>
          {banks.map((b, i) => (
            <View style={styles.row} key={b.name}>
              <Image source={b.icon} style={styles.bankIcon} />
              <Text style={styles.bankName}>{b.name}</Text>
              <View style={styles.flex} />
              <TouchableOpacity style={styles.circleBtn} onPress={handleArrowPress}>
                <Text style={styles.circleBtnText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.sectionTitle}>Virtual Account</Text>
          {virtualAccounts.map((b, i) => (
            <View style={styles.row} key={b.name}>
              <Image source={b.icon} style={styles.bankIcon} />
              <Text style={styles.bankName}>{b.name}</Text>
              <View style={styles.flex} />
              <TouchableOpacity style={styles.circleBtn} onPress={handleArrowPress}>
                <Text style={styles.circleBtnText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.sectionTitle}>Cicilan Tanpa Kartu Kredit</Text>
          {creditOptions.map((b, i) => (
            <View style={styles.row} key={b.name}>
              <Image source={b.icon} style={styles.bankIcon} />
              <Text style={styles.bankName}>{b.name}</Text>
              <View style={styles.flex} />
              <TouchableOpacity style={styles.circleBtn} onPress={handleArrowPress}>
                <Text style={styles.circleBtnText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#E5E5E5' },
  topBarWrap: { backgroundColor: '#7B22D3', height: 100, paddingBottom: 0, paddingHorizontal: 0, paddingTop: 0 },
  topBar: { flexDirection: 'row', alignItems: 'center', paddingTop: 20, paddingBottom: 8, paddingHorizontal: 20 },
  backBtn: { width: 28, height: 28, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, marginRight: 10 },
  backIcon: { width: 15, height: 15, tintColor: '#7B22D3' },
  topBarTitle: { fontWeight: 'bold', color: '#fff', fontSize: 18 },
  whiteBlock: { flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 24, paddingTop: 32, marginTop: -40, overflow: 'hidden' },
  timerText: { textAlign: 'center', fontSize: 16, marginBottom: 24, marginTop: 8 },
  timerRed: {
    color: '#FD3D3D',
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#222', marginTop: 24, marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  bankIcon: { width: 48, height: 24, resizeMode: 'contain', marginRight: 16 },
  bankName: { fontSize: 15, color: '#222' },
  flex: { flex: 1 },
  circleBtn: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#7B22D3', alignItems: 'center', justifyContent: 'center' },
  circleBtnText: { color: '#7B22D3', fontSize: 20, fontWeight: 'bold' },
});

export default PaymentScreen; 