import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {HomeComponent} from './components/home/home.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { ClientComponent } from './components/client/client.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CreateApartmentComponent } from './components/apartment/create/createApartment.component';
import { ViewApartmentComponent } from './components/apartment/view/viewApartment.component';
import { ModifyApartmentComponent } from './components/apartment/modify/modifyApartment.component';
import { CancelReservationComponent } from './components/reservation/cancel/cancelReservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    HomeComponent,
    NavigationComponent,
    ClientComponent,
    ApartmentComponent,
    CreateApartmentComponent,
    ViewApartmentComponent,
    ModifyApartmentComponent,
    CancelReservationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
