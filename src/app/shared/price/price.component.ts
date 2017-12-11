import {Component, Input, OnInit} from '@angular/core';
import {Price} from '../price.model';

@Component({
  selector: 'bs-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less']
})
export class PriceComponent implements OnInit {
  @Input() price: Price;
  constructor() { }

  ngOnInit() {
  }

}
