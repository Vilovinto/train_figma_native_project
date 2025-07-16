import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TermsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBarWrap}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Arrow_Left.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Syarat & Ketentuan</Text>
        </View>
      </View>
      <View style={styles.whiteBlock}>
        <Text style={styles.timerText}>
          Selesaikan pemesanan dalam
          <Text style={styles.timerRed}> 00:60:00</Text>
        </Text>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ alignItems: 'flex-start', paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Cicilan Tanpa Kartu Kredit</Text>
          <View style={styles.cicilanBlock}>
            <Image source={require('../../assets/images/credit_card.png')} style={styles.cicilanIcon} />
            <Text style={styles.cicilanText}>{'< 17 Tahun (S&K BERLAKU)'}</Text>
          </View>
          <Text style={styles.termsTitle}>Syarat & Ketentuan</Text>
          <View style={styles.termsList}>
            <Text style={styles.termsItem}>1. Harus membuat surat izin Orang Tua.</Text>
            <Text style={styles.termsItem}>2. Foto / Scan E-KTP Orang Tua.</Text>
            <Text style={styles.termsItem}>3. Foto / Scan KK.</Text>
            <Text style={styles.termsItem}>4. Swafoto Orang Tua Bersama E-KTP.</Text>
            <Text style={styles.termsItem}>5. Foto Bersama Orang Tua.</Text>
            <Text style={styles.termsItem}>6. Tanda Tangan diatas materai di dalam surat izin Orang Tua.</Text>
          </View>
          <Text style={styles.termsTitle}>Perhatian</Text>
          <View style={styles.termsList}>
            <Text style={styles.termsItem}>1. Sistem cicilan {'< 17 Tahun'} akan di proses selama 1 minggu, dikarenakan proses pengecekan yang super ketat.</Text>
            <Text style={styles.termsItem}>2. Dilarang membuat surat izin Orang Tua palsu.</Text>
            <Text style={styles.termsItem}>3. Wajib mengisi data diri dengan sesuai dan dilarang memalsukan data diri.</Text>
            <Text style={styles.termsItem}>4. Untuk poin 1, kamu harus pesan tiket h-7 / h-8.</Text>
            <Text style={styles.termsItem}>5. Akan diberikan 1x kesempatan update data dokumen.</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.agreeBtn}>
          <Text style={styles.agreeBtnText}>Saya menyetujui Syarat & Ketentuan</Text>
        </TouchableOpacity>
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
  whiteBlock: { flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 44, paddingTop: 24, marginTop: -40, overflow: 'hidden' },
  timerText: { textAlign: 'center', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', color: '#B47AEA', marginBottom: 10, marginTop: 8 },
  timerRed: { color: '#FD3D3D', fontSize: 22, fontFamily: 'Open Sans', fontWeight: '400', marginLeft: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '400', fontFamily: 'Open Sans', color: '#000', marginTop: 16, marginBottom: 16, textAlign: 'left' },
  cicilanBlock: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7B22D3', borderRadius: 16, paddingHorizontal: 24, paddingVertical: 8, marginBottom: 28, width: '100%' },
  cicilanIcon: { width: 24, height: 24, tintColor: '#fff', marginRight: 12 },
  cicilanText: { color: '#fff', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, letterSpacing: 0, textAlign: 'center' },
  termsTitle: { fontSize: 13, fontWeight: '400', fontFamily: 'Open Sans', color: '#000', marginTop: 12, marginBottom: 8, textAlign: 'left' },
  termsList: { marginBottom: 4 },
  termsItem: { fontSize: 11, color: '#000', marginBottom: 6, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, textAlign: 'left' },
  agreeBtn: { backgroundColor: '#7B22D3', borderRadius: 22, paddingVertical: 14, alignItems: 'center', marginTop: 16, marginBottom: 32, width: '100%' },
  agreeBtnText: { color: '#fff', fontSize: 15, fontWeight: 'bold', fontFamily: 'Open Sans' },
  infoText: { fontSize: 11, fontWeight: '400', fontFamily: 'Open Sans', color: '#000', textAlign: 'left', marginBottom: 24, width: '100%' },
});

export default TermsScreen; 
