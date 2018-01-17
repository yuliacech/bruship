import {Address} from './address.model';
import {AveragePrice} from './average.price.model';
import {AverageRating} from '@app/accommodations/shared/average.rating.model';

export class Accommodation {
  id: string;
  name: string;
  coverPhoto: string;
  averageRating: AverageRating;
  location: {
    latitude: number;
    longitude: number;
  };
  address: Address;
  averagePrice: AveragePrice;
}
