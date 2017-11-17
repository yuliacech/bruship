import { Injectable } from '@angular/core';

@Injectable()
export class AccommodationService {

  constructor() { }

  getTopAccommodations() {
    return TOP_ACCOMMODATIONS;
  }

}
const TOP_ACCOMMODATIONS = [
  {id: '1', name: 'Perfect place for a student', cover_photo: '../../assets/img/accommodations/1.jpg', rating: 3.2},
  {id: '2', name: 'Quite and spacious room', cover_photo: '../../assets/img/accommodations/2.jpg', rating: 5},
  {id: '3', name: 'Room ok for the price', cover_photo: '../../assets/img/accommodations/3.jpg', rating: 1.5}
];
