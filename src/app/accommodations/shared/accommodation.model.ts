import {Address} from './address.model';
import {AveragePrice} from './average.price.model';
import {AverageRating} from '@app/accommodations/shared/average.rating.model';

export class Accommodation {
  id: string;
  name: string;
  coverPhoto: string;
  rating: AverageRating;
  latitude: number;
  longitude: number;
  address: Address;
  price: AveragePrice;
}
