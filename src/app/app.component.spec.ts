import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MainPageComponent} from './home/main-page/main-page.component';
import {FooterComponent} from './footer/footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TopListComponent} from './accommodations/top-list/top-list.component';
import {TopDetailComponent} from './accommodations/top-list/top-detail/top-detail.component';
import {RatingComponent} from './shared/rating/rating.component';
import {PriceComponent} from './shared/price/price.component';
import {AddressComponent} from './shared/address/address.component';
import {MapListComponent} from './accommodations/map-list/map-list.component';
import {MapDetailComponent} from './accommodations/map-list/map-detail/map-detail.component';
import {AccommodationService} from './accommodations/shared/accommodation.service';
import {AccommodationServiceMock} from './accommodations/shared/accommodation.service.mock';
import {AgmCoreModule} from '@agm/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TopListComponent, TopDetailComponent, RatingComponent, PriceComponent, AddressComponent,
        MapListComponent, MapDetailComponent, NavbarComponent, MainPageComponent, FooterComponent
      ],
      imports: [ RouterTestingModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBEqwaI0P1yyWmIZ7a4vUPljajobeGc8z8'
        })],
      providers: [
        {
          provide: AccommodationService,
          useClass: AccommodationServiceMock
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
