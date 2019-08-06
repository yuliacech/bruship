import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AgmCoreModule} from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MainPageComponent} from './home/main-page/main-page.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {TopListComponent} from './accommodations/top-list/top-list.component';
import {AccommodationService} from './accommodations/shared/accommodation.service';
import {AddressComponent} from './shared/address/address.component';
import {RatingComponent} from './shared/rating/rating.component';
import {PriceComponent} from './shared/price/price.component';
import {MapListComponent} from './accommodations/map-list/map-list.component';
import {MapDetailComponent} from './accommodations/map-list/map-detail/map-detail.component';
import {FooterComponent} from './footer/footer.component';
import {HowtoListComponent} from './home/howto-list/howto-list.component';
import {NewsletterComponent} from './home/newsletter/newsletter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewsletterService} from './home/newsletter/newsletter.service';
import {LoginComponent} from './home/login/login.component';
import {AuthService} from './shared/auth/auth.service';
import {AccountComponent} from './user/account/account.component';
import {AccountService} from './user/account/account.service';
import {ReviewListComponent} from './user/review-list/review-list.component';
import {ReviewDetailComponent} from './user/review-list/review-detail/review-detail.component';
import {ReviewFormComponent} from './user/review-form/review-form.component';
import {GooglePlacesAutocompleteDirective} from './shared/google-places-autocomplete/google-places-autocomplete.directive';
import {FileValueAccessorDirective} from '@app/shared/file-value-accessor/file-value-accessor.directive';
import { SearchComponent } from './search/search.component';
import {SearchService} from '@app/search/search.service';
import { SearchDetailComponent } from './search/search-detail/search-detail.component';
import { AccommodationCardComponent } from './shared/accommodation-card/accommodation-card.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import {ReviewService} from '@app/shared/review.service';

const BRUSHIP_ROUTES: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'search', component: SearchComponent },
  { path: 'accommodations/:slug', component: AccommodationComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    ContactUsComponent,
    TopListComponent,
    AddressComponent,
    RatingComponent,
    PriceComponent,
    MapListComponent,
    MapDetailComponent,
    FooterComponent,
    HowtoListComponent,
    NewsletterComponent,
    LoginComponent,
    AccountComponent,
    ReviewListComponent,
    ReviewDetailComponent,
    ReviewFormComponent,
    GooglePlacesAutocompleteDirective,
    FileValueAccessorDirective,
    SearchComponent,
    SearchDetailComponent,
    AccommodationCardComponent,
    SearchFormComponent,
    AccommodationComponent,
    PhotoCarouselComponent,
    ReviewCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(BRUSHIP_ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzgnNt_sO7a_6Ea1ekwvz-AUz_yUQag6E',
      libraries: ['places', 'geometry']
    }),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [AccommodationService, NewsletterService, AuthService, AccountService, SearchService, ReviewService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
