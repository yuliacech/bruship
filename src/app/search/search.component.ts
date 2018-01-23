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

  place: PlaceResult;
  foundAccommodations: Accommodation[];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    if (this.searchService.place) {


      this.place = this.searchService.place;
      this.searchService.findAccommodations(this.place.geometry.location.lat() + '', this.place.geometry.location.lng() + '')
        .subscribe(data => {
          this.foundAccommodations = data;
        }, error => {
          console.log(error);
        });
    }
    console.log(this.searchService.place);

  }

}
