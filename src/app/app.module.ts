import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopListComponent } from './accommodations/top-list/top-list.component';
import { TopDetailComponent } from './accommodations/top-list/top-detail/top-detail.component';
import {AccommodationService} from './accommodations/shared/accommodation.service';
import { AddressComponent } from './accommodations/sections/address/address.component';
import { RatingComponent } from './accommodations/sections/rating/rating.component';
import { PriceComponent } from './accommodations/sections/price/price.component';
import { MapListComponent } from './accommodations/map-list/map-list.component';
import { MapDetailComponent } from './accommodations/map-list/map-detail/map-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HowtoListComponent } from './howto-list/howto-list.component';

const BRUSHIP_ROUTES: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    ContactUsComponent,
    TopListComponent,
    TopDetailComponent,
    AddressComponent,
    RatingComponent,
    PriceComponent,
    MapListComponent,
    MapDetailComponent,
    FooterComponent,
    HowtoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(BRUSHIP_ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEqwaI0P1yyWmIZ7a4vUPljajobeGc8z8'
    })
  ],
  providers: [AccommodationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
