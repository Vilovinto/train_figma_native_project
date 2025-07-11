import React, { useState, useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/components/common/SplashScreen';
import { BookingProvider } from './src/store/BookingContext';
import { AuthProvider } from './src/store/AuthContext';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider>
      <BookingProvider>
        <AppNavigator />
      </BookingProvider>
    </AuthProvider>
  );
};

export default App;
