import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountComponent} from './account.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AccountService} from '@app/user/account/account.service';
import {AuthService} from '@app/shared/auth/auth.service';
import {of} from 'rxjs/observable/of';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  const mockAuthService = jasmine.createSpyObj(['userProfile']);
  mockAuthService.userProfile = true;

  const mockAccountService = jasmine.createSpyObj(['getReviews']);
  mockAccountService.getReviews.and.callFake(() => of([]));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent],
      providers: [
        {
          provide: AccountService,
          useValue: mockAccountService
        }, {
          provide: AuthService,
          useValue: mockAuthService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
