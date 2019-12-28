import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccommodationComponent} from './accommodation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {ReviewService} from '@app/shared/review.service';
import {AccommodationService} from '@app/accommodations/shared/accommodation.service';
import {of} from 'rxjs/observable/of';

describe('AccommodationComponent', () => {
  let component: AccommodationComponent;
  let fixture: ComponentFixture<AccommodationComponent>;

  const mockAccommodationService = jasmine.createSpyObj(['getAccommodationByAddressSlug']);
  mockAccommodationService.getAccommodationByAddressSlug.and.callFake(() => of(mockAccommodation));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AccommodationComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ReviewService,
          useValue: jasmine.createSpy()
        }, {
          provide: AccommodationService,
          useValue: mockAccommodationService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const mockAccommodation = {
  _id: 'testID',
  address: {
    streetName: 'Test street',
    houseNumber: '45',
    postalCode: '12345',
    city: 'Test city',
    state: '',
    country: 'Belgium'
  },
  addressSlug: 'testSlug',
  location: {
    latitude: 3456357456,
    longitude: 734674567
  },
  createdBy: 'testID',
  createdTimestamp: new Date(),
  rating: 5,
  reviews: [],
  latestReview: 'testReview',
  photos: [],
  price: {
    amount: 450,
    currency: 'EUR',
    period: 'month'
  }
};
