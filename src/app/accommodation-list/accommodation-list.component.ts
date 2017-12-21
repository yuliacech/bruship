import { Component, OnInit } from '@angular/core';
import {AccommodationService} from '../shared/accommodation.service';
import {Accommodation} from '../shared/accommodation.model';

@Component({
  selector: 'bs-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.less']
})
export class AccommodationListComponent implements OnInit {

  constructor(private acommodationService: AccommodationService) { }

  accommodations: Accommodation[];
  ngOnInit() {
    this.acommodationService.getCentralAccommodations().subscribe(data => {
      this.accommodations = data;
    });
  }

}
