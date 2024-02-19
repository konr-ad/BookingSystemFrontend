import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ClientComponent } from './components/client/client.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import {ViewReservationComponent} from "./components/reservation/view/viewReservation.component";
import {ModifyReservationComponent} from "./components/reservation/modify/modifyReservation.component";
import { CreateReservationComponent } from "./components/reservation/create/createReservation.component";
import {CancelReservationComponent} from "./components/reservation/cancel/cancelReservation.component";
import {ViewApartmentComponent} from "./components/apartment/view/viewApartment.component";
import {ModifyApartmentComponent} from "./components/apartment/modify/modifyApartment.component";
import {CreateApartmentComponent} from "./components/apartment/create/createApartment.component";
import {ViewClientComponent} from "./components/client/view/viewClient.component";
import {ModifyClientComponent} from "./components/client/modify/modifyClient.component";
import {CreateClientComponent} from "./components/client/create/createClient.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'reservations/create', component: CreateReservationComponent },
  { path: 'reservations/cancellations', component: CancelReservationComponent },
  { path: 'reservations/list', component: ViewReservationComponent },
  { path: 'reservations/edit/:id', component: ModifyReservationComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'clients/create', component: CreateClientComponent },
  { path: 'clients/edit', component: ModifyClientComponent },
  { path: 'clients/list', component: ViewClientComponent },
  { path: 'apartments', component: ApartmentComponent },
  { path: 'apartments/create', component: CreateApartmentComponent },
  { path: 'apartments/edit', component: ModifyApartmentComponent },
  { path: 'apartments/list', component: ViewApartmentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
