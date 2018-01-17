import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import {AddressComponent} from '../accommodations/sections/address/address.component';
import {TopListComponent} from '../accommodations/top-list/top-list.component';
import {AppComponent} from '../app.component';
import {AgmCoreModule} from '@agm/core';
import {RouterTestingModule} from '@angular/router/testing';
import {NavbarComponent} from '../navbar/navbar.component';
import {PriceComponent} from '../accommodations/sections/price/price.component';
import {TopDetailComponent} from '../accommodations/top-list/top-detail/top-detail.component';
import {AccommodationService} from '../accommodations/shared/accommodation.service';
import {AccommodationServiceMock} from '../accommodations/shared/accommodation.service.mock';
import {FooterComponent} from '../footer/footer.component';
import {RatingComponent} from '../accommodations/sections/rating/rating.component';
import {MapListComponent} from '../accommodations/map-list/map-list.component';
import {MapDetailComponent} from '../accommodations/map-list/map-detail/map-detail.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopListComponent, TopDetailComponent, RatingComponent, PriceComponent, AddressComponent,
        MapListComponent, MapDetailComponent, MainPageComponent
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
