import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bs-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  maxRating = 5;
  constructor() { }

  ngOnInit() {
  }

  getStarSrcPath(index: number) {
    if (index <= this.rating) {
      return '../../assets/img/star.png';
    } else if (index >= Math.floor(this.rating ) && index < this.rating + 1 && this.rating >= Math.floor(this.rating) + 0.5) {
      return '../../assets/img/star-half.png';
    } else {
      return '../../assets/img/star-outline.png';
    }
  }
  getArray() {
    const indexArray = [];
    for (let i = 1; i < this.maxRating + 1; i++) {
      indexArray.push(i);
    }
    return indexArray;
  }

}
