import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import { stackScreens } from './stackScreens';
import { useSplashLoader } from './hooks/useSplashLoader';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  const loading = useSplashLoader();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <RootStack.Screen name="Splash" component={SplashScreen} />
        ) : (
          stackScreens.map(({ name, component }) => (
            <RootStack.Screen key={name} name={name} component={component} />
          ))
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 