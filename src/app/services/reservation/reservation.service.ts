import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
