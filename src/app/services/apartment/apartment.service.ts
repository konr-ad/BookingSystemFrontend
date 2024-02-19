import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApartmentDto } from '../../models/apartment.dto';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private apiUrl = 'http://localhost:8080/api/apartments';

  constructor(private http: HttpClient) {}

  createApartment(apartmentData: ApartmentDto): Observable<ApartmentDto> {
    return this.http.post<ApartmentDto>(this.apiUrl, apartmentData);
  }

  getAllApartments(): Observable<ApartmentDto[]> {
    return this.http.get<ApartmentDto[]>(this.apiUrl);
  }

  searchApartments(searchTerm: string): Observable<ApartmentDto[]> {
    return this.http.get<ApartmentDto[]>(`${this.apiUrl}?search=${searchTerm}`);
  }

  updateApartment(apartment: ApartmentDto): Observable<ApartmentDto> {
    return this.http.put<ApartmentDto>(`${this.apiUrl}/${apartment.id}`, apartment);
  }

  deleteApartment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
