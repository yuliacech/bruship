import {Address} from '@app/shared/models/address.model';
import {Price} from '@app/shared/models/price.model';

export class Accommodation {
  _id: string;
  address: Address;
  addressSlug: string;
  location: {
    latitude: number;
    longitude: number;
  };
  createdBy: string;
  createdTimestamp: Date;
  rating: number;
  reviews: string[];
  latestReview: string;
  photos: string[];
  price: Price;
}
