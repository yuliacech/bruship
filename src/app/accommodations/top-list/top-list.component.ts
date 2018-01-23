import {Component, OnInit} from '@angular/core';
import {Accommodation} from '../shared/accommodation.model';
import {AccommodationService} from '../shared/accommodation.service';

const MAX_TOP_ACCOMMODATIONS_NUMBER = 9;

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.less']
})
export class TopListComponent implements OnInit {
  topAccommodations: Accommodation[];
  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.accommodationService.getAccommodations(MAX_TOP_ACCOMMODATIONS_NUMBER).subscribe(data => {
      this.topAccommodations = data;
    });
  }

}
