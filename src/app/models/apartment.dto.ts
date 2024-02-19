// models/apartment.dto.ts

export interface ApartmentDto {
  id: number;
  number: string;
  pricePerNight: number;
  area: string;
  capacity: number;
  reservationId?: number;
  isEditing?: boolean;
}

