import MainTabNavigator from './MainTabNavigator';
import HotelListScreen from '../screens/Hotel/HotelListScreen';
import PilihanHotelScreen from '../screens/Hotel/PilihanHotelScreen';
import HotelDetailScreen from '../screens/Hotel/HotelDetailScreen';
import RoomListScreen from '../screens/Hotel/RoomListScreen';
import PaymentScreen from '../screens/Hotel/PaymentScreen';
import TermsScreen from '../screens/Hotel/TermsScreen';

export const stackScreens = [
  { name: 'Main', component: MainTabNavigator },
  { name: 'HotelList', component: HotelListScreen },
  { name: 'PilihanHotel', component: PilihanHotelScreen },
  { name: 'HotelDetail', component: HotelDetailScreen },
  { name: 'RoomList', component: RoomListScreen },
  { name: 'Payment', component: PaymentScreen },
  { name: 'Terms', component: TermsScreen },
]; 