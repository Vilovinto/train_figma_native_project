import { Hotel } from '../types/hotel';

export const mockHotels: Hotel[] = [
  {
    id: '1',
    namaHotel: 'Hotel Kyiv',
    deskripsiHotel: 'Готель у центрі Києва',
    fotoHotel: ['https://picsum.photos/200/300'],
    kategoriHotel: '4 зірки',
    lokasiHotel: 'Kyiv',
    maps: 'https://maps.google.com',
  },
  {
    id: '2',
    namaHotel: 'Hotel Lviv',
    deskripsiHotel: 'Затишний готель у Львові',
    fotoHotel: ['https://picsum.photos/200/301'],
    kategoriHotel: '3 зірки',
    lokasiHotel: 'Lviv',
    maps: 'https://maps.google.com',
  },
]; 