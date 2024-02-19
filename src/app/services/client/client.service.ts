// client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientDto } from '../../models/client.dto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) {}

  createClient(clientData: ClientDto): Observable<ClientDto> {
    return this.http.post<ClientDto>(this.apiUrl, clientData);
  }

  getAllClients(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(this.apiUrl);
  }

  searchClients(term: string): Observable<ClientDto[]> {
    const url = `${this.apiUrl}?search=${term}`;
    return this.http.get<ClientDto[]>(url);
  }

  getClient(id: number): Observable<ClientDto> {
    return this.http.get<ClientDto>(`${this.apiUrl}/${id}`);
  }

  updateClient(client: ClientDto): Observable<ClientDto> {
    const url = `${this.apiUrl}/${client.id}`;
    return this.http.put<ClientDto>(url, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
