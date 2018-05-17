import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-salads-page',
  templateUrl: './salads-page.component.html',
  styleUrls: ['./salads-page.component.css']
})
export class SaladsPageComponent implements OnInit {

  products = [];
  searchString = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products.filter((item) => {
        return item.category.title.includes('SALADS');
      });
    });
  }
}
