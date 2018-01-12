import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {AccountService} from './account.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService, public accountService: AccountService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  getReviews() {
    this.accountService.getReviews()
      .subscribe(data => console.log, error => console.log);
  }
}
