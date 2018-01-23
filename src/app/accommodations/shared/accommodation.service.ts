import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accommodation} from './accommodation.model';
import {environment} from '@env/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccommodationService {

  constructor(private httpClient: HttpClient) { }

  getAccommodations(maxNumber: number): Observable<Accommodation[]> {
    return this.httpClient.get<Accommodation[]>(environment.baseApiUrl + '/api/accommodations/limit/'
      + maxNumber);
  }

}

