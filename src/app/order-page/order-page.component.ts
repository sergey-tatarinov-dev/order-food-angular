import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  cart: Product[] = [];

  address = {
    city: '',
    street: '',
    house: 0,
    corps: '',
    flat: 0
  };

  @Input() order = {
    name: '',
    phone: '',
    address: this.address
  };

  constructor() {
  }

  clear() {
    ProductComponent.cardProducts.splice(0, ProductComponent.cardProducts.length);
  }

  getTotalPrice() {
    return ProductComponent.totalPrice;
  }

  ngOnInit() {
    this.cart = ProductComponent.cardProducts;
  }

  public getPaymentData() {
    return this.order;
  }

}
