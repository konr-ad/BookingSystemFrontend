import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApartmentService } from '../../services/apartment/apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  apartmentForm!: FormGroup;

  constructor(private apartmentService: ApartmentService) {}

  ngOnInit() {
    this.apartmentForm = new FormGroup({
      number: new FormControl('', Validators.required),
      pricePerNight: new FormControl('', [Validators.required, Validators.min(0.01)]),
      area: new FormControl(''),
      capacity: new FormControl('', Validators.required),
      reservation: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.apartmentForm.valid) {
      this.apartmentService.createApartment(this.apartmentForm.value).subscribe(
        response => {
          console.log('Apartament został dodany', response);
          // Dodatkowe akcje, np. przekierowanie lub wyświetlenie powiadomienia
        },
        error => {
          console.error('Wystąpił błąd', error);
        }
      );
    }
  }
}
