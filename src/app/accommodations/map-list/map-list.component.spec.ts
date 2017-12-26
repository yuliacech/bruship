import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapListComponent } from './map-list.component';
import {AgmCoreModule} from '@agm/core';
import {AccommodationService} from '../shared/accommodation.service';
import {AccommodationServiceMock} from '../shared/accommodation.service.mock';
import {PriceComponent} from '../sections/price/price.component';
import {AddressComponent} from '../sections/address/address.component';
import {RatingComponent} from '../sections/rating/rating.component';
import {MapDetailComponent} from './map-detail/map-detail.component';

describe('MapListComponent', () => {
  let component: MapListComponent;
  let fixture: ComponentFixture<MapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapListComponent, MapDetailComponent, AddressComponent, RatingComponent, PriceComponent ],
      imports: [
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
    fixture = TestBed.createComponent(MapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
