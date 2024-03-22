import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../services/reservation/reservation.service';
import { ReservationDto } from '../../../models/reservation.dto';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './viewReservation.component.html',
  styleUrls: ['./viewReservation.component.css']
})
export class ViewReservationComponent implements OnInit {
  reservations: ReservationDto[] = [];
  searchTerm: string = '';

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations(): void {
    this.reservationService.getAllReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  searchReservations(): void {
    this.reservationService.searchReservations(this.searchTerm).subscribe(reservations => {
      this.reservations = reservations;
    });
  }
}
