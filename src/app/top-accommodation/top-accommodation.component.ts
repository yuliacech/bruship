import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from '../shared/accommodation.model';

@Component({
  selector: 'bs-top-accommodation',
  templateUrl: './top-accommodation.component.html',
  styleUrls: ['./top-accommodation.component.less']
})
export class TopAccommodationComponent implements OnInit {
  @Input() accommodation: Accommodation;
  constructor() { }

  ngOnInit() {
  }

}
