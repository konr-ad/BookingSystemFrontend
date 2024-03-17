export interface ReservationDto {
  id?: number;
  clientDtoId: number;
  apartmentsDtoIds: number[];
  startDate: Date;
  endDate: Date;
  reservationStatus: string;
  totalPrice: number;
  modifiedDate?: Date;
  notes?: string;
  isEditing?: boolean;
}
