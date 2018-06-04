import {Component, OnInit} from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart: Product[] = [];

  constructor() {
  }

  ngOnInit() {
    this.cart = ProductComponent.cardProducts;
  }

  getTotalPrice() {
    return ProductComponent.totalPrice;
  }

  clear() {
    ProductComponent.cardProducts.splice(0, ProductComponent.cardProducts.length);
  }

  addProduct(product: Product) {
    ProductComponent.cardProducts.forEach((cardProduct) => {
      if (product === cardProduct) {
        cardProduct.count++;
        ProductComponent.totalPrice += cardProduct.selectedPortion.price;
      }
    });
  }

  minusProduct(product: Product) {
    let i = 0;
    ProductComponent.cardProducts.forEach((cardProduct) => {
      if (product === cardProduct) {
        ProductComponent.totalPrice -= cardProduct.selectedPortion.price;
        if (cardProduct.count > 1) {
          cardProduct.count--;
        } else {
          ProductComponent.cardProducts.splice(i, 1);
        }
      }
      i++;
    });
  }

}
