import { Injectable } from '@angular/core';
import {Accommodation} from './accommodation.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AccommodationServiceMock {

  constructor() { }

  getTopAccommodations(maxNumber: number) {
    return Observable.of([
      {id: '1', name: 'Perfect place for a student', coverPhoto: 'https://dl.dropboxusercontent.com/s/m8p2u7u5rrw3dk3/1.jpg?dl=0',
        rating: 2.5, latitude: 50.82062879, longitude: 4.37123544, address:  {streetName: 'Chaussée de Tirlemont', houseNumber: '122',
          postalCode: '9988', city: 'Waterland-Oudeman', state: '', country: 'Belgium'}, price: {amount: 450, currency: 'EUR',
          period: 'month'}}
    ]);
  }

  getCentralAccommodations() {
    return Observable.of([
      {id: '1', name: 'Perfect place for a student', coverPhoto: 'https://dl.dropboxusercontent.com/s/m8p2u7u5rrw3dk3/1.jpg?dl=0',
        rating: 2.5, latitude: 50.82062879, longitude: 4.37123544, address:  {streetName: 'Chaussée de Tirlemont', houseNumber: '122',
          postalCode: '9988', city: 'Waterland-Oudeman', state: '', country: 'Belgium'}, price: {amount: 450, currency: 'EUR',
          period: 'month'}}
    ]);
  }

}

