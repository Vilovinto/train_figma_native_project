import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { mockUser } from '../../services/userService';
import BalanceCard from '../../components/user/BalanceCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../store/AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.avatarBlock}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{mockUser.name}</Text>
        <Text style={styles.email}>{mockUser.email}</Text>
      </View>
      <BalanceCard saldo={mockUser.saldo} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditProfile')}>
        <Icon name="create-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.btnText}>Редагувати профіль</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BookingHistory')}>
        <Icon name="time-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.btnText}>Історія бронювань</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Icon name="log-out-outline" size={20} color="#6C3DD1" style={{ marginRight: 8 }} />
        <Text style={styles.logoutBtnText}>Вийти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  avatarBlock: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C3DD1',
    marginBottom: 2,
  },
  email: {
    fontSize: 15,
    color: '#888',
    marginBottom: 8,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6C3DD1',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 18,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#6C3DD1',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 28,
    justifyContent: 'center',
  },
  logoutBtnText: {
    color: '#6C3DD1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen; 