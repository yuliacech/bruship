import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/shared/auth/auth.service';
import {AccountService} from './account.service';
import 'rxjs/add/operator/map';
import {Review} from '@app/shared/review.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  profile: any;
  reviews: Review[];
  hideReviewForm = true;
  constructor(public auth: AuthService, public accountService: AccountService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.getReviews();
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.getReviews();
      });
    }
  }

  getReviews() {
    this.accountService.getReviews()
      .subscribe(data =>  {
        this.reviews = data;
      }, error => console.log);
  }

  toggleHideReviewForm() {
    this.hideReviewForm = !this.hideReviewForm;
  }
}
