import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { BookingProvider } from './src/store/BookingContext';
import { AuthProvider } from './src/store/AuthContext';

const App = () => (
  <AuthProvider>
    <BookingProvider>
      <AppNavigator />
    </BookingProvider>
  </AuthProvider>
);

export default App;
