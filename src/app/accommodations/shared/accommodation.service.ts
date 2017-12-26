import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accommodation} from './accommodation.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccommodationService {

  constructor(private httpClient: HttpClient) { }

  getTopAccommodations(maxNumber: number) {
    return this.httpClient.get<Accommodation[]>(environment.baseApiUrl + '/api/top_accommodations?maxNumber='
      + maxNumber);
  }

  getCentralAccommodations() {
    return this.httpClient.get<Accommodation[]>(environment.baseApiUrl + '/api/accommodations');
  }

}

