import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.less']
})
export class ReviewListComponent implements OnInit {

  @Input() reviews;
  constructor() { }

  ngOnInit() {
  }

}
