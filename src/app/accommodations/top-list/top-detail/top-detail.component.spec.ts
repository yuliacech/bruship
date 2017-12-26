import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDetailComponent } from './top-detail.component';
import {PriceComponent} from '../../sections/price/price.component';
import {AddressComponent} from '../../sections/address/address.component';
import {RatingComponent} from '../../sections/rating/rating.component';
import {MapDetailComponent} from '../../map-list/map-detail/map-detail.component';

describe('TopDetailComponent', () => {
  let component: TopDetailComponent;
  let fixture: ComponentFixture<TopDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDetailComponent, AddressComponent, RatingComponent, PriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
