import { Hotel } from '../types/hotel';

export const mockHotels: Hotel[] = [
  {
    id: '1',
    namaHotel: 'Hotel Satu',
    deskripsiHotel: 'Готель біля моря',
    fotoHotel: [require('../assets/images/Hotel_Satu.png')],
    kategoriHotel: '5 зірок',
    lokasiHotel: 'Indonesia',
    maps: 'https://maps.google.com',
    styles: { color: '#222', fontWeight: 'bold', fontSize: 13 },
  },
  {
    id: '2',
    namaHotel: 'Hotel Dua',
    deskripsiHotel: 'Сучасний готель у центрі',
    fotoHotel: [require('../assets/images/Hotel_Dua.png')],
    kategoriHotel: '4 зірки',
    lokasiHotel: 'Indonesia',
    maps: 'https://maps.google.com',
    styles: { color: '#222', fontWeight: 'bold', fontSize: 13 },
  },
  {
    id: '3',
    namaHotel: 'Hotel Tiga',
    deskripsiHotel: 'Готель для сімейного відпочинку',
    fotoHotel: [require('../assets/images/Hotel_Tiga.png')],
    kategoriHotel: '4 зірки',
    lokasiHotel: 'Indonesia',
    maps: 'https://maps.google.com',
    styles: { color: '#222', fontWeight: 'bold', fontSize: 13 },
  },
  {
    id: '4',
    namaHotel: 'Hotel Empat',
    deskripsiHotel: 'Готель з басейном',
    fotoHotel: [require('../assets/images/Hotel_Empat.png')],
    kategoriHotel: '3 зірки',
    lokasiHotel: 'Indonesia',
    maps: 'https://maps.google.com',
    styles: { color: '#222', fontWeight: 'bold', fontSize: 13 },
  },
]; 