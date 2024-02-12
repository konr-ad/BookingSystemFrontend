import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApartmentDto } from '../../models/apartment.dto';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private apiUrl = 'http://localhost:8080/api/apartments'; // URL do Twojego API

  constructor(private http: HttpClient) {}

  createApartment(apartmentData: ApartmentDto): Observable<ApartmentDto> {
    return this.http.post<ApartmentDto>(this.apiUrl, apartmentData);
  }

  getAllApartments(): Observable<ApartmentDto[]> {
    return this.http.get<ApartmentDto[]>(this.apiUrl);
  }
}
