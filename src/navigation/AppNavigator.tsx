import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import MainTabNavigator from './MainTabNavigator';
import HotelListScreen from '../screens/Hotel/HotelListScreen';
import PilihanHotelScreen from '../screens/Hotel/PilihanHotelScreen';
// import AuthNavigator from './AuthNavigator';
// import { useAuth } from '../store/AuthContext';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  // const { isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <RootStack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <RootStack.Screen name="Main" component={MainTabNavigator} />
            <RootStack.Screen name="HotelList" component={HotelListScreen} />
            <RootStack.Screen name="PilihanHotel" component={PilihanHotelScreen} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 