import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from '@app/accommodations/shared/accommodation.model';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.less']
})
export class SearchDetailComponent implements OnInit {

  @Input() accommodation: Accommodation;
  constructor() { }

  ngOnInit() {
  }

}
