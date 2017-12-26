import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from '../../shared/accommodation.model';

@Component({
  selector: 'app-top-detail',
  templateUrl: './top-detail.component.html',
  styleUrls: ['./top-detail.component.less']
})
export class TopDetailComponent implements OnInit {
  @Input() accommodation: Accommodation;
  constructor() { }

  ngOnInit() {
  }

}
