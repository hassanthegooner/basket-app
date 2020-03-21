import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() basketClick = new EventEmitter();

  assetsUrl = '/assets/images/';
  basketSVGFileName = 'shopping-basket.svg';

  constructor() { }

  ngOnInit() {
  }

}
