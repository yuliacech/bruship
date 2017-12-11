import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../address.model';

@Component({
  selector: 'bs-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  @Input() address: Address;
  constructor() { }

  ngOnInit() {
  }

}
