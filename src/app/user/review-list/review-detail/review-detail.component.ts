import {Component, Input, OnInit} from '@angular/core';
import {Review} from '@app/user/review.model';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.less']
})
export class ReviewDetailComponent implements OnInit {

  @Input() review: Review;
  constructor() { }

  ngOnInit() {
  }

}
