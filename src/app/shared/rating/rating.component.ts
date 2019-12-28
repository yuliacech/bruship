import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

const MAX_RATING = 5;

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Input() editable: boolean;
  @Output() ratingChanged = new EventEmitter();
  starIcons: string[];
  constructor() { }

  ngOnInit() {
    this.initStarIcons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initStarIcons();
  }

  initStarIcons() {
    this.starIcons = [];
    for (let i = 1; i < MAX_RATING + 1; i++) {
      this.starIcons.push(this.getStarIcon(i));
    }
  }

  getStarIcon(index: number): string {
    if (index <= this.rating) {
      return 'star';
    } else if (index >= Math.floor(this.rating ) && index < this.rating + 1 &&
      this.rating < Math.floor(this.rating) + 0.25) {
      return 'star_border';
    } else if (index >= Math.floor(this.rating ) && index < this.rating + 1 &&
      this.rating < Math.floor(this.rating) + 0.75) {
      return 'star_half';
    } else if (index >= Math.floor(this.rating ) && index < this.rating + 1 &&
      this.rating >= Math.floor(this.rating) + 0.75) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(index: number) {
    this.ratingChanged.emit(index + 1);
  }

}
