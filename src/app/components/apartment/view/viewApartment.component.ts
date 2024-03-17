// components/apartment/view/viewApartment.component.ts

import { Component, OnInit } from '@angular/core';
import { ApartmentDto } from '../../../models/apartment.dto';
import { ApartmentService } from '../../../services/apartment/apartment.service';

@Component({
  selector: 'app-view-apartment',
  templateUrl: './viewApartment.component.html',
  styleUrls: ['./viewApartment.component.css']
})
export class ViewApartmentComponent implements OnInit {
  apartments: ApartmentDto[] = [];
  searchTerm: string = '';

  constructor(private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    this.getAllApartments();
  }

  getAllApartments(): void {
    this.apartmentService.getAllApartments().subscribe(apartments => {
      this.apartments = apartments.map(apartment => ({
        ...apartment,
        isEditing: false //
      }));
    });
  }

  searchApartments(): void {
    this.apartmentService.searchApartments(this.searchTerm).subscribe(apartments => {
      this.apartments = apartments;
    });
  }

  enableEdit(id: number): void {
    this.apartments = this.apartments.map(apartment => {
      if (apartment.id === id) apartment.isEditing = true;
      return apartment;
    });
  }

  saveApartment(apartment: ApartmentDto): void {
    this.apartmentService.updateApartment(apartment).subscribe(() => {
      this.getAllApartments(); // Odśwież listę po zapisie
    });
  }

  deleteApartment(id: number): void {
    this.apartmentService.deleteApartment(id).subscribe(() => {
      this.getAllApartments(); // Odśwież listę po usunięciu
    });
  }

  cancelEdit(): void {
    this.apartments.forEach(apartment => {
      apartment.isEditing = false;
    });
  }
}
