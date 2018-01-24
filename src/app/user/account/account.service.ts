import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs/Observable';
import {Review} from '@app/shared/review.model';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getReviews(): Observable<Review[]> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('access_token')});
    return this.httpClient.get<Review[]>(environment.baseApiUrl + '/api/user/reviews', {headers: headers});
  }

  submitReview(review: any, fileList: FileList) {
    const formData = new FormData();
    formData.append('review', JSON.stringify(review));
    if (fileList && fileList.length > 0) {

      formData.append('files', fileList[0]);
    }

    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('access_token')});
    return this.httpClient.post<any[]>(environment.baseApiUrl + '/api/user/reviews_with_photos', formData, {headers: headers});

  }


}

