import {NewsletterService} from '@app/home/newsletter/newsletter.service';
import {of} from 'rxjs/observable/of';
import Spy = jasmine.Spy;
import {environment} from '@env/environment';

describe('NewsletterService', () => {
  let httpClientSpy: { post: jasmine.Spy };
  let newsletterService: NewsletterService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj(['post']);
    newsletterService = new NewsletterService(<any>httpClientSpy);
  });

  it('should create', () => {
    expect(newsletterService).toBeTruthy();
  });

  it('should call post method with correct params in body', () => {
    const testEmail = 'test@example.com';
    httpClientSpy.post.and.returnValue(of({email: testEmail}));

    newsletterService.addSubscriber(testEmail).subscribe(
      data => expect(data['email']).toEqual(testEmail),
      fail
    );
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.post).toHaveBeenCalledWith(environment.baseApiUrl + '/api/subscribers/', {email: testEmail});
  });
});
