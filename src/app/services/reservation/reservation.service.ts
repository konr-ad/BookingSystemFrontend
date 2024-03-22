import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationDto } from '../../models/reservation.dto';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) { }

  createReservation(reservationData: ReservationDto): Observable<ReservationDto> {
    return this.http.post<ReservationDto>(this.apiUrl, reservationData);
  }

  getAllReservations(): Observable<ReservationDto[]> {
    return this.http.get<ReservationDto[]>(this.apiUrl);
  }

  searchReservations(searchTerm: string, lastName?: string, phoneNumber?: string, status?: string): Observable<ReservationDto[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.append('search', searchTerm);
    }
    if (lastName) {
      params = params.append('lastName', lastName);
    }
    if (phoneNumber) {
      params = params.append('phoneNumber', phoneNumber);
    }
    if (status) {
      params = params.append('status', status);
    }
    return this.http.get<ReservationDto[]>(`${this.apiUrl}/search`, { params: params });
  }

  updateReservation(reservation: ReservationDto): Observable<ReservationDto> {
    return this.http.put<ReservationDto>(`${this.apiUrl}/${reservation.id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
