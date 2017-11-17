import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../shared/acommodation.model';

@Component({
  selector: 'bs-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  topAccommodations: Accommodation[];
  constructor() { }

  ngOnInit() {
    this.topAccommodations = [
      {id: '1', name: 'Perfect place for a student', cover_photo: '../../assets/img/accommodations/1.jpg'},
      {id: '2', name: 'Quite and spacious room', cover_photo: '../../assets/img/accommodations/2.jpg'},
      {id: '3', name: 'Room ok for the price', cover_photo: '../../assets/img/accommodations/3.jpg'}
    ];
  }

}
