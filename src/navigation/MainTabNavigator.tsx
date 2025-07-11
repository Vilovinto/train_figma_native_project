import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import HotelListScreen from '../screens/Hotel/HotelListScreen';
import HotelDetailScreen from '../screens/Hotel/HotelDetailScreen';
import RoomListScreen from '../screens/Hotel/RoomListScreen';
import RoomDetailScreen from '../screens/Hotel/RoomDetailScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import BookingHistoryScreen from '../screens/Profile/BookingHistoryScreen';
import PromoScreen from '../screens/Home/PromoScreen';

export type HotelStackParamList = {
  HotelList: undefined;
  HotelDetail: { hotelId: string };
  RoomList: { hotelId: string };
  RoomDetail: { roomId: string };
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  BookingHistory: undefined;
};

const Tab = createBottomTabNavigator();
const HotelStack = createStackNavigator<HotelStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();

const HotelStackScreen = () => (
  <HotelStack.Navigator>
    <HotelStack.Screen name="HotelList" component={HotelListScreen} options={{ title: 'Готелі' }} />
    <HotelStack.Screen name="HotelDetail" component={HotelDetailScreen} options={{ title: 'Деталі готелю' }} />
    <HotelStack.Screen name="RoomList" component={RoomListScreen} options={{ title: 'Кімнати' }} />
    <HotelStack.Screen name="RoomDetail" component={RoomDetailScreen} options={{ title: 'Деталі кімнати' }} />
  </HotelStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профіль' }} />
    <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Редагування профілю' }} />
    <ProfileStack.Screen name="BookingHistory" component={BookingHistoryScreen} options={{ title: 'Історія бронювань' }} />
  </ProfileStack.Navigator>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hotels" component={HotelStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Promo" component={PromoScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator; 