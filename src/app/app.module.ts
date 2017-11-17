import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { TipListComponent } from './tip-list/tip-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JumboSearchComponent } from './jumbo-search/jumbo-search.component';
import { TopListComponent } from './top-list/top-list.component';
import { TopAccommodationComponent } from './top-accommodation/top-accommodation.component';

const BRUSHIP_ROUTES: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'accommodations', component: AccommodationListComponent },
  { path: 'tips', component: TipListComponent },
  { path: 'contact_us', component: ContactUsComponent },
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
    TopListComponent,
    TopAccommodationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      BRUSHIP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
