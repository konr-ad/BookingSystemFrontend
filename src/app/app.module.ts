import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ModifyReservationComponent} from "./components/reservation/modify/modifyReservation.component";
import {ViewReservationComponent} from "./components/reservation/view/viewReservation.component";
import {CreateClientComponent} from "./components/client/create/createClient.component";
import {ModifyClientComponent} from "./components/client/modify/modifyClient.component";
import {ViewClientComponent} from "./components/client/view/viewClient.component";
import {CreateReservationComponent} from "./components/reservation/create/createReservation.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ApartmentComponent,
    CreateApartmentComponent,
    ViewApartmentComponent,
    ModifyApartmentComponent,
    ReservationComponent,
    CancelReservationComponent,
    ModifyReservationComponent,
    ViewReservationComponent,
    ClientComponent,
    CreateClientComponent,
    ModifyClientComponent,
    ViewClientComponent,
    CreateReservationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
