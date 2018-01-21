import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListComponent } from './top-list.component';
import {PriceComponent} from '../../shared/price/price.component';
import {TopDetailComponent} from './top-detail/top-detail.component';
import {AddressComponent} from '../../shared/address/address.component';
import {RatingComponent} from '../../shared/rating/rating.component';
import {AccommodationService} from '../shared/accommodation.service';
import {AccommodationServiceMock} from '../shared/accommodation.service.mock';

describe('TopListComponent', () => {
  let component: TopListComponent;
  let fixture: ComponentFixture<TopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopListComponent, TopDetailComponent, AddressComponent, RatingComponent, PriceComponent ],
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
    fixture = TestBed.createComponent(TopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
