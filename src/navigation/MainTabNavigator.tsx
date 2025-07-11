import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import HotelListScreen from '../screens/Hotel/HotelListScreen';
import HotelDetailScreen from '../screens/Hotel/HotelDetailScreen';
import RoomListScreen from '../screens/Hotel/RoomListScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

export type HotelStackParamList = {
  HotelList: undefined;
  HotelDetail: { hotelId: string };
  RoomList: { hotelId: string };
};

const Tab = createBottomTabNavigator();
const HotelStack = createStackNavigator<HotelStackParamList>();

const HotelStackScreen = () => (
  <HotelStack.Navigator>
    <HotelStack.Screen name="HotelList" component={HotelListScreen} options={{ title: 'Готелі' }} />
    <HotelStack.Screen name="HotelDetail" component={HotelDetailScreen} options={{ title: 'Деталі готелю' }} />
    <HotelStack.Screen name="RoomList" component={RoomListScreen} options={{ title: 'Кімнати' }} />
  </HotelStack.Navigator>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hotels" component={HotelStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator; 