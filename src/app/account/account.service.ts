import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getReviews() {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('access_token')});
    return this.httpClient.get(environment.baseApiUrl + '/api/user/reviews', {headers: headers});
  }


}

