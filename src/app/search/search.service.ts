import {Injectable} from '@angular/core';
import {Address} from '@app/shared/models/address.model';

import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import {Observable} from 'rxjs/Observable';
import {Accommodation} from '@app/accommodations/shared/accommodation.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable()
export class SearchService {
  private placeResult: PlaceResult;

  constructor(private httpClient: HttpClient) {
    console.log('search service created');
  }

  set place(place: PlaceResult) {
    this.placeResult = place;
  }

  get place(): PlaceResult {
    return this.placeResult;
  }

  findAccommodations(latitude: string, longitude: string): Observable<Accommodation[]> {
    return this.httpClient.get<Accommodation[]>(environment.baseApiUrl + '/api/search/longitude/' + longitude
    + '/latitude/' + latitude);
  }
}
