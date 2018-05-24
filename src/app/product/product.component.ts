import {Component, Input} from '@angular/core';
import {Portion} from '../models/portion.model';
import {Product} from '../models/product.model';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends AppComponent {

  public static totalPrice = 0;
  @Input() product;
  @Input() isList = true;
  @Input() cardClass = '';
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
    this.product.selectedPortion = new Portion(this.selectedValue, this.selectedPrice);
    const newProduct = Product.getCopy(product);
    var BreakException = {};
    let isExist = false;
    try {
      if (ProductComponent.cardProducts.length === 0) {
        newProduct.count++;
        ProductComponent.cardProducts.push(newProduct);
      } else {
        ProductComponent.cardProducts.forEach((iterableProduct) => {
          if (iterableProduct.title === newProduct.title && iterableProduct.selectedPortion.size === newProduct.selectedPortion.size) {
            iterableProduct.count++;
            isExist = true;
            throw BreakException;
          }
        });
        newProduct.count += 1;
        if (!isExist) {
          ProductComponent.cardProducts.push(newProduct);
        }
      }
    } catch (e) {
      if (e !== BreakException) {
        throw e;
      }
    }
    ProductComponent.totalPrice = this.calculateTotalPrice(ProductComponent.cardProducts);
  }

  calculateTotalPrice(cart: Product[]): number {
    let totalPrice: number = 0;
    cart.forEach((product) => {
      totalPrice += product.count * product.selectedPortion.price;
    });
    return totalPrice;
  }

}
