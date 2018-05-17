import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.css']
})
export class PizzaPageComponent implements OnInit {
  products = [];
  searchString = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.filter((item) => {
        return item.category.title.includes('PIZZA');
      });
    });
  }
}
