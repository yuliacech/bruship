import { Component, OnInit } from '@angular/core';
import {SearchService} from '@app/search/search.service';
import PlaceResult = google.maps.places.PlaceResult;
import {Accommodation} from '@app/accommodations/shared/accommodation.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  foundAccommodations: Accommodation[];
  searchPlace: PlaceResult;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    console.log(this.searchService.place);
    if (this.searchService.place) {
      this.performSearch();
    }
  }

  performSearch() {

    this.searchService.findAccommodations(this.searchService.place.geometry.location.lat() + '',
      this.searchService.place.geometry.location.lng() + '')
      .subscribe(data => {
        this.searchPlace = this.searchService.place;
        this.searchService.place = null;
        this.foundAccommodations = data;
      }, error => {
        console.log(error);
      });
  }

}
