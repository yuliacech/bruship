import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListComponent } from './top-list.component';
import {PriceComponent} from '@app/shared/price/price.component';
import {AddressComponent} from '@app/shared/address/address.component';
import {RatingComponent} from '@app/shared/rating/rating.component';
import {AccommodationService} from '../shared/accommodation.service';
import {AccommodationServiceMock} from '../shared/accommodation.service.mock';

describe('TopListComponent', () => {
  let component: TopListComponent;
  let fixture: ComponentFixture<TopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopListComponent, AddressComponent, RatingComponent, PriceComponent ],
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
