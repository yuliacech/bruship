import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getReviews() {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('access_token')});
    return this.httpClient.get<any[]>(environment.baseApiUrl + '/api/user/reviews', {headers: headers});
  }

  submitReview(review: any) {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('access_token')});
    return this.httpClient.post<any[]>(environment.baseApiUrl + '/api/user/reviews',
      review, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')),
      });
  }


}

