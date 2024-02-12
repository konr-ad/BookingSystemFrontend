// client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientDto } from '../../models/client.dto'; // Załóżmy, że masz taki model

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) {}

  createClient(clientData: ClientDto): Observable<ClientDto> {
    return this.http.post<ClientDto>(this.apiUrl, clientData);
  }

  // Metody do obsługi pozostałych operacji CRUD...
  getAllClients(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(this.apiUrl);
  }
}
