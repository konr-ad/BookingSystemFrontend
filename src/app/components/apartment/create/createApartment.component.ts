import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApartmentService } from '../../../services/apartment/apartment.service';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './createApartment.component.html',
  styleUrls: ['./createApartment.component.css']
})
export class CreateApartmentComponent implements OnInit {
  apartmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    this.apartmentForm = this.fb.group({
      number: ['', [Validators.required]],
      pricePerNight: ['', [Validators.required, Validators.min(1)]],
      area: ['', [Validators.required]],
      capacity: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.apartmentForm.valid) {
      // Wywołaj serwis do zapisania apartamentu
      this.apartmentService.createApartment(this.apartmentForm.value).subscribe({
        next: (apartment) => console.log(apartment),
        error: (error) => console.error('Błąd podczas dodawania apartamentu', error)
      });
    } else {
      Object.values(this.apartmentForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
