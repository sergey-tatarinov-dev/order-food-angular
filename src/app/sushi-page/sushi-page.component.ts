import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-sushi-page',
  templateUrl: './sushi-page.component.html',
  styleUrls: ['./sushi-page.component.css']
})
export class SushiPageComponent implements OnInit {

  products = [];
  searchString = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.filter((item) => {
        return item.category.title.includes('SUSHI');
      });
    });
  }

}
