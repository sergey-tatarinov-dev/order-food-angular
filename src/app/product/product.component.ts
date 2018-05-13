import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    console.log('im here');
    this.productService.getProducts()
      .subscribe(
        data => this.products = data,
        (error) => console.log(error),
        () => console.log('Success.')
      );
  }

}
