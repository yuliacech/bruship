import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from 'app/accommodations/shared/accommodation.model';

@Component({
  selector: 'app-accommodation-card',
  templateUrl: './accommodation-card.component.html',
  styleUrls: ['./accommodation-card.component.less']
})
export class AccommodationCardComponent implements OnInit {
  @Input() accommodation: Accommodation;
  constructor() { }

  ngOnInit() {
  }

}
