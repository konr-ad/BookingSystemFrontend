import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ClientComponent } from './components/client/client.component';
import { ApartmentComponent } from './components/apartment/apartment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'apartments', component: ApartmentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
