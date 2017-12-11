import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { TipListComponent } from './tip-list/tip-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JumboSearchComponent } from './jumbo-search/jumbo-search.component';
import { TopAccommodationListComponent } from './top-accommodations/top-accommodation-list/top-accommodation-list.component';
import { TopAccommodationComponent } from './top-accommodations/top-accommodation-detail/top-accommodation.component';
import { RatingComponent } from './shared/rating/rating.component';
import {AccommodationService} from './shared/accommodation.service';
import { MapAccommodationListComponent } from './map-accommodations/map-accommodation-list/map-accommodation-list.component';
import { MapAccommodationComponent } from './map-accommodations/map-accommodation-detail/map-accommodation.component';
import { AddressComponent } from './shared/address/address.component';
import { PriceComponent } from './shared/price/price.component';

const BRUSHIP_ROUTES: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'accommodations', component: AccommodationListComponent },
  { path: 'tips', component: TipListComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    AccommodationListComponent,
    TipListComponent,
    ContactUsComponent,
    JumboSearchComponent,
    TopAccommodationListComponent,
    TopAccommodationComponent,
    RatingComponent,
    MapAccommodationListComponent,
    MapAccommodationComponent,
    AddressComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(BRUSHIP_ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEqwaI0P1yyWmIZ7a4vUPljajobeGc8z8'
    })
  ],
  providers: [
    AccommodationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
