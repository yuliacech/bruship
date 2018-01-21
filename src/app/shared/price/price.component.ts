import {Component, Input, OnInit} from '@angular/core';
import {Price} from 'app/shared/models/price.model';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less']
})
export class PriceComponent implements OnInit {
  @Input() price: Price;
  constructor() { }

  ngOnInit() {
  }

}
