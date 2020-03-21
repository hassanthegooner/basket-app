import { Component, OnInit } from '@angular/core';
import { PRODUCTS_DATA } from 'src/products';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS_DATA;

  basket: { total: string, items: Product[] } = {
    total: null,
    items: []
  };

  constructor() { }

  ngOnInit() {
  }

  onBasketClick(product: Product) {
    this.basket.items.push(product);
    let total = 0;
    for (let index = 0; index < this.basket.items.length; index++) {
      const item = this.basket.items[index];
      total = total + item.price;
    }
    this.basket.total = total.toFixed(2);
  }

  sortBy(type: 'name' | 'price') {
    if (type === 'name') {
      this.products.sort((p1, p2) => (p1.name < p2.name) ? -1 : (p1.name > p2.name) ? 1 : 0);
    } else {
      this.products.sort((p1, p2) => (p1.price < p2.price) ? -1 : (p1.price > p2.price) ? 1 : 0);
    }
  }

}
