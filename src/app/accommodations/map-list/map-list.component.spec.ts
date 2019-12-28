import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MapListComponent} from './map-list.component';
import {AccommodationService} from '../shared/accommodation.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs/observable/of';

describe('MapListComponent', () => {
  let component: MapListComponent;
  let fixture: ComponentFixture<MapListComponent>;

  const mockAccommodationService = jasmine.createSpyObj(['getAccommodations']);
  mockAccommodationService.getAccommodations.and.callFake(() => of([]));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: AccommodationService,
          useValue: mockAccommodationService
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
