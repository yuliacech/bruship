import {Component, OnInit} from '@angular/core';
import {Accommodation} from '../shared/accommodation.model';
import {AccommodationService} from '../shared/accommodation.service';

const MAX_MAP_ACCOMMODATIONS_NUMBER = 30;

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
  loading: boolean;

  constructor(private accommodationService: AccommodationService) {
  }

  ngOnInit() {
    this.loading = true;
    this.accommodationService.getAccommodations(MAX_MAP_ACCOMMODATIONS_NUMBER).subscribe(data => {
      this.loading = false;
      this.centralAccommodations = data;
    });
  }
}
