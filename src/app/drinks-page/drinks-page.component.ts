import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinks-page.component.html',
  styleUrls: ['./drinks-page.component.css']
})
export class DrinksPageComponent implements OnInit {

  products = [];
  searchString = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.filter((item) => {
        return item.category.title.includes('DRINKS');
      });
    });
  }
}
