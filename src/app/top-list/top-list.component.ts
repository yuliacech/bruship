import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../shared/accommodation.model';
import {AccommodationService} from '../shared/accommodation.service';

@Component({
  selector: 'bs-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  topAccommodations: Accommodation[];
  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
    this.topAccommodations = AccommodationService.getTopAccommodations();
  }

}
