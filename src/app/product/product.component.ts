import {Component, Input, OnInit} from '@angular/core';
import {Portion} from '../model/portion.model';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() static cart: Product[] = [];
  @Input() product;
  @Input() isList = true;
  values = [];
  prices = [];
  selectedValue = 'Размер';
  selectedPrice = 0;

  selectValue(portion: Portion) {
    this.selectedValue = portion.size.toString();
    this.selectedPrice = portion.price;
    this.values.push(this.selectedValue);
    this.prices.push(this.selectedPrice);
  }

  addToCart(product: Product) {
    this.selectedPrice = this.selectedPrice ? this.selectedPrice : this.product.portions[0].price;
    this.selectedValue = this.selectedValue === 'Размер' ? this.product.portions[0].size : this.selectedValue;
    this.product.selectedPortion = new Portion(this.selectedPrice, this.selectedValue);
    ProductComponent.cart.push(product);
    console.log(ProductComponent.cart);
    this.calculateTotalPrice(ProductComponent.cart);
  }

  calculateTotalPrice(cart: Product[]) {
    let totalPrice = 0;
    cart.forEach((prod) => {
      totalPrice += prod.selectedPortion.price;
    });
    console.log(totalPrice);
  }
}
