import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAccommodationComponent } from './map-accommodation.component';
import {AgmCoreModule} from '@agm/core';
import {AddressComponent} from '../../shared/address/address.component';
import {PriceComponent} from '../../shared/price/price.component';
import {RatingComponent} from '../../shared/rating/rating.component';
import {AccommodationService} from '../../shared/accommodation.service';
import {AccommodationServiceMock} from '../../shared/accommodation.service.mock';

describe('MapAccommodationComponent', () => {
  let component: MapAccommodationComponent;
  let fixture: ComponentFixture<MapAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAccommodationComponent, AddressComponent, PriceComponent, RatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
