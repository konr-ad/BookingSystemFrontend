// client.model.ts
export interface ClientDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  preferredPaymentMethod?: string;
  isEditing?: boolean;
}
