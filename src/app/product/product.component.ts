import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product;

}
