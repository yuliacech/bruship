import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAccommodationListComponent } from './top-accommodation-list.component';
import {TopAccommodationComponent} from '../top-accommodation-detail/top-accommodation.component';
import {PriceComponent} from '../../shared/price/price.component';
import {AddressComponent} from '../../shared/address/address.component';
import {RatingComponent} from '../../shared/rating/rating.component';
import {AccommodationService} from '../../shared/accommodation.service';
import {AccommodationServiceMock} from '../../shared/accommodation.service.mock';

describe('TopAccommodationListComponent', () => {
  let component: TopAccommodationListComponent;
  let fixture: ComponentFixture<TopAccommodationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAccommodationListComponent, TopAccommodationComponent, PriceComponent, AddressComponent, RatingComponent ],
      providers: [{
        provide: AccommodationService,
        useClass: AccommodationServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAccommodationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
