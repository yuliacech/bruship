import * as auth0 from 'auth0-js';
import {AuthService} from '@app/shared/auth/auth.service';


describe('AuthService', () => {
  let authService: AuthService;
  let router: { navigate: jasmine.Spy };
  let mockAuth0: { authorize: jasmine.Spy, parseHash: jasmine.Spy };
  beforeEach(() => {
    mockAuth0 = {
      authorize: jasmine.createSpy('authorize').and.callFake(() => console.log('mock authorize called')),
      parseHash: jasmine.createSpy('parseHash')
    };
    const mockWebAuth = jasmine.createSpy('WebAuth').and.callFake(() => {
      console.log('mock auth0.WebAuth called');
      return mockAuth0;
    });
    spyOnProperty(auth0, 'WebAuth', 'get').and.returnValue(mockWebAuth);

    router = jasmine.createSpyObj(['navigate']);
    authService = new AuthService(<any>router);
  });

  it('should create', () => {
    expect(authService).toBeTruthy();
  });

  it('should call auth0.authorize on login', () => {
    authService.login();
    expect(mockAuth0.authorize).toHaveBeenCalledTimes(1);

  });

  it('should set session and navigate to account if authentication is successful', () => {
    const mockAuthResult = {expiresIn: 30, accessToken: 'test', idToken: 'testId'};
    mockAuth0.parseHash.and.callFake(callbackFn => {
      console.log('mock parseHash called');
      callbackFn(null, mockAuthResult);
    });
    const mockSetSession = spyOn<any>(AuthService, 'setSession').and.callFake(() => console.log('mock setSession called'));
    authService.handleAuthentication();
    expect(mockAuth0.parseHash).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(['/account']);
    expect(mockSetSession).toHaveBeenCalledTimes(1);
    expect(mockSetSession).toHaveBeenCalledTimes(1);
    expect(mockSetSession).toHaveBeenCalledWith(mockAuthResult);
  });


  it('should navigate to / if authentication fails', () => {
    mockAuth0.parseHash.and.callFake(callbackFn => {
      console.log('mock parseHash called');
      callbackFn('authentication error');
    });
    authService.handleAuthentication();
    expect(mockAuth0.parseHash).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
