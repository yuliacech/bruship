import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from '../../shared/accommodation.model';

@Component({
  selector: 'bs-map-accommodation',
  templateUrl: './map-accommodation.component.html',
  styleUrls: ['./map-accommodation.component.less']
})
export class MapAccommodationComponent implements OnInit {

  @Input() accommodation: Accommodation;
  constructor() { }

  ngOnInit() {
  }

}
