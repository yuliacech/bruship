import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Accommodation} from '../shared/accommodation.model';
import {AccommodationService} from '../shared/accommodation.service';

@Component({
  selector: 'bs-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.less']
})
export class MapListComponent implements OnInit {

  centralAccommodations: Accommodation[];
  lat = 50.85;
  lng = 4.35;
  zoom = 11;
  constructor(private accommodationService: AccommodationService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.accommodationService.getCentralAccommodations().subscribe(data => {
      this.centralAccommodations = data;
      console.log('centralAccommodations');
      console.log(this.centralAccommodations);
      this.cd.detectChanges();
    });
  }

}
