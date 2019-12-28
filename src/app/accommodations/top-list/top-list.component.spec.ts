import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopListComponent} from './top-list.component';
import {AccommodationService} from '../shared/accommodation.service';
import {of} from 'rxjs/observable/of';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('TopListComponent', () => {
  let component: TopListComponent;
  let fixture: ComponentFixture<TopListComponent>;

  const mockAccommodationService = jasmine.createSpyObj(['getAccommodations']);
  mockAccommodationService.getAccommodations.and.callFake(() => of([]));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopListComponent],
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
    fixture = TestBed.createComponent(TopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
