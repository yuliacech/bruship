import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewDetailComponent} from './review-detail.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ReviewDetailComponent', () => {
  let component: ReviewDetailComponent;
  let fixture: ComponentFixture<ReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDetailComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
