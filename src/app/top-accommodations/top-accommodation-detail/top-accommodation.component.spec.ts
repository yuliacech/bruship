import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAccommodationComponent } from './top-accommodation.component';
import {PriceComponent} from '../../shared/price/price.component';
import {RatingComponent} from '../../shared/rating/rating.component';
import {AddressComponent} from '../../shared/address/address.component';

describe('TopAccommodationComponent', () => {
  let component: TopAccommodationComponent;
  let fixture: ComponentFixture<TopAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAccommodationComponent, PriceComponent, RatingComponent, AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
