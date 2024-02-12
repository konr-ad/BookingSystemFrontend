import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, AbstractControl} from '@angular/forms';
import {ReservationService} from '../../services/reservation/reservation.service';
import {ReservationDto} from '../../models/reservation.dto';
import {ClientService} from '../../services/client/client.service';
import {ClientDto} from '../../models/client.dto';
import {ApartmentService} from '../../services/apartment/apartment.service';
import {ApartmentDto} from '../../models/apartment.dto';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  clients: ClientDto[] = [];
  apartments: ApartmentDto[] = [];

  constructor(private reservationService: ReservationService,
              private clientService: ClientService,
              private apartmentService: ApartmentService) {
  }

  ngOnInit() {
    this.reservationForm = new FormGroup({
      clientId: new FormControl('', Validators.required),
      apartmentsDtoIds: new FormArray([], Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      reservationStatus: new FormControl('', Validators.required),
      totalPrice: new FormControl('', [Validators.required, Validators.min(0)]),
      notes: new FormControl(''),
      // Możesz dodać więcej pól zgodnie z potrzebami
    });

    this.loadClients();
    this.loadApartments();
  }

  addApartmentId(apartmentId: number): void {
    (this.reservationForm.get('apartmentsDtoIds') as FormArray).push(new FormControl(apartmentId, Validators.required));
  }

  loadClients() {
    this.clientService.getAllClients().subscribe(
      data => {
        this.clients = data;
      },
      error => {
        console.error('Wystąpił błąd przy pobieraniu klientów', error);
      }
    );
  }

  loadApartments() {
    this.apartmentService.getAllApartments().subscribe(
      data => {
        this.apartments = data;
      },
      error => {
        console.error('Wystąpił błąd przy pobieraniu apartamentów', error);
      }
    );
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservationData: ReservationDto = this.reservationForm.value;
      this.reservationService.createReservation(reservationData).subscribe(
        response => {
          console.log('Rezerwacja została utworzona', response);
          // Dodatkowe akcje, np. wyświetlenie powiadomienia
        },
        error => {
          console.error('Wystąpił błąd przy tworzeniu rezerwacji', error);
          // Obsługa błędów, np. wyświetlenie komunikatu o błędzie
        }
      );
    }
  }

  onApartmentChange(event: any, apartmentId: number | undefined): void {
    const apartmentsArray = this.reservationForm.get('apartmentsDtoIds') as FormArray;

    if (event.target.checked) {
      apartmentsArray.push(new FormControl(apartmentId));
    } else {
      // Użycie metody findIndex do znalezienia indeksu kontrolki, którą chcemy usunąć
      const index = apartmentsArray.controls.findIndex((ctrl: AbstractControl) => ctrl.value === apartmentId);
      if (index !== -1) {
        apartmentsArray.removeAt(index);
      }
    }
  }
}
