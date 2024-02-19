import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../services/client/client.service";

@Component({
  selector: 'app-create-client',
  templateUrl: './createClient.component.html',
  styleUrls: ['./createClient.component.css']
})
export class CreateClientComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      preferredPaymentMethod: [''] // Nie jest wymagane, więc nie dodajemy walidatorów
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value).subscribe({
        next: (client) => console.log(client),
        error: (error) => console.error(error)
      });
    }
  }
}
