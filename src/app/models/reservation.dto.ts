export interface ReservationDto {
  id?: number;
  clientId: number;
  apartmentId: number[];
  startDate: Date;
  endDate: Date;
  reservationStatus: string;
  totalPrice: number;
  modifiedDate: Date;
  notes?: string;
}
