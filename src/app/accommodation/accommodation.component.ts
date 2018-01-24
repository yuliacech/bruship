import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Accommodation} from '@app/accommodations/shared/accommodation.model';
import 'rxjs/add/operator/switchMap';
import {AccommodationService} from '@app/accommodations/shared/accommodation.service';
import {Observable} from 'rxjs/Observable';
import {Review} from '@app/shared/review.model';
import {ReviewService} from '@app/shared/review.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.less']
})
export class AccommodationComponent implements OnInit {

  accommodation$: Observable<Accommodation>;
  reviews$: Observable<Review>[];
  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService,
              private reviewService: ReviewService) { }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.accommodation$ =  this.accommodationService.getAccommodationByAddressSlug(params.get('slug'));
        return this.accommodation$;
      })
      .subscribe((accommodation: Accommodation) => {
        this.reviews$ = [];
        accommodation.reviews.forEach(reviewID => {
          this.reviews$.push(this.reviewService.getReviewByID(reviewID));
        });
      });


  }

}
