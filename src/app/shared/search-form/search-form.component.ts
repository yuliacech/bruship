import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '@app/search/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  @Output() searchPerformed = new EventEmitter();
  ngOnInit() {
  }

  onClick() {
    this.searchPerformed.emit();
  }
  onEnter() {
    if (this.searchService.place) {
      this.searchPerformed.emit();
    }
  }

}
