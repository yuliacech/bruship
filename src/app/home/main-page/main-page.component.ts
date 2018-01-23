import { Component, OnInit } from '@angular/core';
import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import {Router} from '@angular/router';
import {SearchService} from '@app/search/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {
  }

  performSearch(place: PlaceResult) {
    this.searchService.place = place;
    this.router.navigate(['/search']);

  }
}
