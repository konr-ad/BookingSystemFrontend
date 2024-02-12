import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])
      // Dodaj pozostałe pola formularza
    });
  }
  onSubmit() {
    if (this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value).subscribe(
        response => {
          console.log('Klient został dodany', response);
          // Dodatkowe akcje, np. przekierowanie lub wyświetlenie powiadomienia
        },
        error => {
          console.error('Wystąpił błąd', error);
        }
      );
    }
  }
}
