import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewFormComponent} from './review-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AccountService} from '@app/user/account/account.service';

describe('ReviewFormComponent', () => {
  let component: ReviewFormComponent;
  let fixture: ComponentFixture<ReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ReviewFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: AccountService,
          useValue: jasmine.createSpy()
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
