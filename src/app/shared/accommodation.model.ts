import {Address} from './address.model';
import {Price} from './price.model';

export class Accommodation {
  id: string;
  name: string;
  coverPhoto: string;
  rating: number;
  latitude: number;
  longitude: number;
  address: Address;
  price: Price;
}
