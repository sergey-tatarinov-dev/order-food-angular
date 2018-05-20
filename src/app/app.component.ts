import {Component, Input} from '@angular/core';
import {ProductService} from './product/product.service';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {

  @Input() static cardProducts: Product[] = [];

  getCart() {
    return AppComponent.cardProducts;
  }

}
