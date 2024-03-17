import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReservationService } from "../../../services/reservation/reservation.service";
import {ClientDto} from "../../../models/client.dto";
import {ClientService} from "../../../services/client/client.service";
import {ApartmentDto} from "../../../models/apartment.dto";
import {ApartmentService} from "../../../services/apartment/apartment.service"; // Załóżmy, że masz taki serwis

@Component({
  selector: 'app-create-reservation',
  templateUrl: './createReservation.component.html',
  styleUrls: ['./createReservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  clients: ClientDto[] = [];
  apartments: ApartmentDto[] = [];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private reservationService: ReservationService,
    private apartmentService: ApartmentService
  ) { }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      clientDtoId : ['', Validators.required],
      apartmentsDtoIds: [[], [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      reservationStatus: ['', [Validators.required]],
      totalPrice: ['', [Validators.required]],
      notes: ['']
    });

    this.loadClients();
    this.loadApartments();
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe((data: ClientDto[]) => {
      this.clients = data;
    });
  }

  loadApartments(): void {
    this.apartmentService.getAllApartments().subscribe((data: ApartmentDto[]) => {
      this.apartments = data;
    });
  }
  onSubmit(): void {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value); // Upewnij się, że wartości są poprawne przed wysłaniem
      this.reservationService.createReservation(this.reservationForm.value).subscribe({
        next: (reservation) => console.log("Rezerwacja utworzona:", reservation),
        error: (error) => console.error("Błąd przy tworzeniu rezerwacji:", error)
      });
    }
  }
}
