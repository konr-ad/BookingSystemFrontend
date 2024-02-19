import {Component, OnInit} from '@angular/core';
import {ClientDto} from "../../../models/client.dto";
import {ClientService} from "../../../services/client/client.service";
import {Router} from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-view-client',
  templateUrl: './viewClient.component.html',
  styleUrls: ['./viewClient.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ViewClientComponent implements OnInit {
  clients: ClientDto[] = [];
  searchTerm: string = '';
  editForms: { [key: number]: FormGroup } = {};
  editingClientId: number | null = null;

  constructor(private clientService: ClientService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getAllClients();
  }
  getAllClients(): void {
    this.clientService.getAllClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  searchClients() {
    this.clientService.searchClients(this.searchTerm).subscribe(
      clients => this.clients = clients,
      error => console.error('Błąd podczas wyszukiwania klientów', error)
    );
  }
  addReservation(clientId?: number) {
    if (clientId === undefined) {
      // Obsłuż sytuację, gdy id jest undefined, np. wyświetl komunikat błędu
      console.error('ID klienta jest niezdefiniowane');
      return;
    }
    this.router.navigate(['/reservations/create', { clientId: clientId }]);
  }

  enableEdit(id: number): void {
    this.clients.forEach(client => {
      if (client.id === id) {
        client.isEditing = true;
      } else {
        client.isEditing = false;
      }
    });
  }

  cancelEdit(): void {
    this.editingClientId = null;
    this.clients = this.clients.map(client => ({
      ...client,
      isEditing: false
    }));
  }
  deleteClient(clientId: number): void {
    this.clientService.deleteClient(clientId).subscribe(() => {
      this.getAllClients();
    });
  }

  saveClient(client: ClientDto): void {
    this.clientService.updateClient(client).subscribe(() => {
      this.getAllClients();
      this.cancelEdit();
    });
  }
}

