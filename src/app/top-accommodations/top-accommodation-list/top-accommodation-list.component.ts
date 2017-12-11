import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../../shared/accommodation.model';
import {AccommodationService} from '../../shared/accommodation.service';

const MAX_TOP_ACCOMMODATIONS_NUMBER = 3;
@Component({
  selector: 'bs-top-accommodation-list',
  templateUrl: './top-accommodation-list.component.html',
  styleUrls: ['./top-accommodation-list.component.less']
})
export class TopAccommodationListComponent implements OnInit {

  topAccommodations: Accommodation[];
  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.accommodationService.getTopAccommodations(MAX_TOP_ACCOMMODATIONS_NUMBER).subscribe(data => {
      this.topAccommodations = data;
    });
  }

}
