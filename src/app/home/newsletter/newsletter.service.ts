import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable()
export class NewsletterService {

  constructor(private httpClient: HttpClient) { }

  addSubscriber(email: string) {
    return this.httpClient.post(environment.baseApiUrl + '/api/subscribers/', {email: email});
  }


}

