import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from '../../shared/accommodation.model';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.less']
})
export class MapDetailComponent implements OnInit {
  @Input() accommodation: Accommodation;
  constructor() { }

  ngOnInit() {
  }

}
