import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailComponent } from './map-detail.component';
import {AddressComponent} from '../../../shared/address/address.component';
import {RatingComponent} from '../../../shared/rating/rating.component';
import {PriceComponent} from '../../../shared/price/price.component';
import {AccommodationService} from '../../shared/accommodation.service';
import {AccommodationServiceMock} from '../../shared/accommodation.service.mock';

describe('MapDetailComponent', () => {
  let component: MapDetailComponent;
  let fixture: ComponentFixture<MapDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDetailComponent, AddressComponent, RatingComponent, PriceComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
