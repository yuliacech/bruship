import {Address} from '@app/shared/models/address.model';
import {Price} from '@app/shared/models/price.model';
import {Duration} from '@app/shared/models/duration.model';

export class Review {
  _id: string;
  address: Address;
  rating: number;
  review: string;
  price: Price;
  duration: Duration;
  userID: string;
  accommodationID: string;
  photos: string[];
  reviewSlug: string;
  timestamp: Date;
}
