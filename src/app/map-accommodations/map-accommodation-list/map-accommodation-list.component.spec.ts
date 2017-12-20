import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAccommodationListComponent } from './map-accommodation-list.component';
import {AccommodationService} from '../../shared/accommodation.service';
import {AgmCoreModule} from '@agm/core';
import {AccommodationServiceMock} from '../../shared/accommodation.service.mock';
import {MapAccommodationComponent} from '../map-accommodation-detail/map-accommodation.component';
import {PriceComponent} from '../../shared/price/price.component';
import {AddressComponent} from '../../shared/address/address.component';
import {RatingComponent} from '../../shared/rating/rating.component';

describe('MapAccommodationListComponent', () => {
  let component: MapAccommodationListComponent;
  let fixture: ComponentFixture<MapAccommodationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAccommodationListComponent, MapAccommodationComponent, PriceComponent, AddressComponent, RatingComponent ],
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
    fixture = TestBed.createComponent(MapAccommodationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
