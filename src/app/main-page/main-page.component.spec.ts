import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import {JumboSearchComponent} from '../jumbo-search/jumbo-search.component';
import {TopAccommodationListComponent} from '../top-accommodations/top-accommodation-list/top-accommodation-list.component';
import {MapAccommodationListComponent} from '../map-accommodations/map-accommodation-list/map-accommodation-list.component';
import {FooterComponent} from '../footer/footer.component';
import {TopAccommodationComponent} from '../top-accommodations/top-accommodation-detail/top-accommodation.component';
import {AgmCoreModule} from '@agm/core';
import {MapAccommodationComponent} from '../map-accommodations/map-accommodation-detail/map-accommodation.component';
import {RatingComponent} from '../shared/rating/rating.component';
import {AddressComponent} from '../shared/address/address.component';
import {PriceComponent} from '../shared/price/price.component';
import {AccommodationService} from '../shared/accommodation.service';
import {AccommodationServiceMock} from '../shared/accommodation.service.mock';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, JumboSearchComponent, TopAccommodationListComponent, MapAccommodationListComponent,
        FooterComponent, TopAccommodationComponent, MapAccommodationComponent, RatingComponent, AddressComponent, PriceComponent ],
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBEqwaI0P1yyWmIZ7a4vUPljajobeGc8z8'
        })
      ],
      providers: [{
        provide: AccommodationService,
        useClass: AccommodationServiceMock
      }]
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
