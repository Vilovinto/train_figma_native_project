export interface Room {
  id: string;
  hotelId: string;
  namaKamar: string;
  stokKamar: number;
  hargaKamar: number;
  rating: number;
  image: any; // require image
  statusText: string;
  statusColor: string;
} 