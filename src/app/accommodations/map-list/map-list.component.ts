import {Component, OnInit} from '@angular/core';
import {Accommodation} from '../shared/accommodation.model';
import {AccommodationService} from '../shared/accommodation.service';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.less']
})
export class MapListComponent implements OnInit {
  centralAccommodations: Accommodation[];
  lat = 50.85;
  lng = 4.35;
  zoom = 12;
  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.accommodationService.getCentralAccommodations().subscribe(data => {
      this.centralAccommodations = data;
    });
  }
}
