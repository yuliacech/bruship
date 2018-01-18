import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from 'app/user/account/account.service';
import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.less']
})
export class ReviewFormComponent implements OnInit {

  @Input() hidden: boolean;
  form: FormGroup;
  submitDisabled = false;
  hideAddress = true;
  reviewCreated = false;
  reviewFailed = false;
  @Output() reviewAdded = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private accountService: AccountService,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      address: this.formBuilder.group({
        streetName: ['', Validators.required],
        houseNumber: ['', Validators.required],
        postalCode: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required]
      }),
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      review: ['', Validators.maxLength(2000)],
      duration: this.formBuilder.group({
        amount: [''],
        unit: ['month']
      }),
      price: this.formBuilder.group({
        amount: [''],
        currency: ['EUR'],
        period: ['month']
      })

    });

  }

  fillAddress(place: PlaceResult) {
    this.hideAddress = false;
    this.form.get('address').markAsDirty();
    this.changeDetector.detectChanges();
    place.address_components.forEach(addressComponent => {
      addressComponent.types.forEach(addressType => {
        switch (addressType) {
          case 'route': {
            this.form.get('address').patchValue({streetName: addressComponent.long_name});
            break;
          }
          case 'street_number': {
            this.form.get('address').patchValue({houseNumber: addressComponent.long_name});
            break;
          }
          case 'locality': {
            this.form.get('address').patchValue({city: addressComponent.long_name});
            break;
          }
          case 'postal_code': {
            this.form.get('address').patchValue({postalCode: addressComponent.long_name});
            break;
          }
          case 'country': {
            this.form.get('address').patchValue({country: addressComponent.long_name});
            break;
          }
          default: {
            break;
          }


        }
      });
    });
  }

  submitReview() {
    console.log(this.form.getRawValue());
    this.submitDisabled = true;
    this.reviewCreated = false;
    this.reviewFailed = false;
    this.accountService.submitReview(this.form.getRawValue()).subscribe(data => {
      this.form.reset();
      this.submitDisabled = false;
      this.reviewAdded.emit();
      this.reviewCreated = true;
      console.log(data);
    }, error => {
      this.reviewFailed = true;
      console.log(error);
    });
  }

  onRatingChange(rating: number) {
    this.form.get('rating').markAsDirty();
    this.form.patchValue({rating: rating});
  }

}
