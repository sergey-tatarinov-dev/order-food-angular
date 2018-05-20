import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  cart: Product[] = [];

  constructor() {
  }

  getTotalPrice() {
    return ProductComponent.totalPrice;
  }

  ngOnInit() {
    this.cart = ProductComponent.cardProducts;
  }

}
