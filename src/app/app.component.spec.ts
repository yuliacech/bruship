import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from '@app/shared/auth/auth.service';

describe('AppComponent', () => {
  const mockAuthService = jasmine.createSpyObj(['handleAuthentication']);
  mockAuthService.handleAuthentication.and.callFake(() => {});
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [{
        provide: AuthService,
        useValue: mockAuthService
      }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
