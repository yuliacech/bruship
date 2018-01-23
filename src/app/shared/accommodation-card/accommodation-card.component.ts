import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from 'app/accommodations/shared/accommodation.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accommodation-card',
  templateUrl: './accommodation-card.component.html',
  styleUrls: ['./accommodation-card.component.less']
})
export class AccommodationCardComponent implements OnInit {
  @Input() accommodation: Accommodation;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/accommodations/' + this.accommodation.addressSlug]);
    console.log(this.accommodation);
  }
}
