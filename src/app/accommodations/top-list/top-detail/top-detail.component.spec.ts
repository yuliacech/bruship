import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDetailComponent } from './top-detail.component';
import {PriceComponent} from '../../../shared/price/price.component';
import {AddressComponent} from '../../../shared/address/address.component';
import {RatingComponent} from '../../../shared/rating/rating.component';
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
