import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Review} from '@app/shared/review.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable()
export class ReviewService {
  constructor(private httpClient: HttpClient) { }
  getReviewByID(id: string): Observable<Review> {
    return this.httpClient.get<Review>(environment.baseApiUrl + '/api/reviews/' + id);
  }
}
