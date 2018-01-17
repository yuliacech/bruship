import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.less']
})
export class ReviewDetailComponent implements OnInit {

  @Input() review;
  constructor() { }

  ngOnInit() {
  }

}
