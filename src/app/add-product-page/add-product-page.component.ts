import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {Portion} from '../models/portion.model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../models/category.model';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {

  public invoiceForm: FormGroup;

  product: Product;
  portion: Portion;
  isFill: any;
  categories: Category[] = [{
    'id': 1,
    'title': 'PIZZA'
  }, {
    'id': 2,
    'title': 'SUSHI'
  }, {
    'id': 3,
    'title': 'SALADS'
  }, {
    'id': 4,
    'title': 'DRINKS'
  }];
  isFirst = true;
  controlError = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }

  ngOnInit() {
    this.product = new Product();
    this.portion = new Portion('', null);
    this.product.portions.push(this.portion);
    this.invoiceForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows()])
    });
  }

  onKey(event: any) {
    event.preventDefault();
    switch (event.target.id) {
      case 'title':
        this.product.title = event.target.value;
        break;
      case 'description':
        this.product.description = event.target.value;
        break;
      case 'image' :
        this.product.imageBinaryString = event.target.value;
        break;
      case 'price' :
        this.portion.price = event.target.value;
        break;
      case 'size' :
        this.portion.size = event.target.value;
        break;
    }
  }

  itemClick(event: any) {
    event.preventDefault();
    this.product.category = this.categories.find(e => e.title === event.target.innerHTML);
  }

  addPortion() {
    if (this.portion.size !== '' && this.portion.price !== null && this.portion.price !== '') {
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      control.push(this.initItemRows());
      if (this.isFirst) {
        this.product.portions.pop();
        this.isFirst = false;
      }

      const size: string = this.portion.size;
      const price: number = this.portion.price;
      const portion = new Portion(size, price);
      this.product.portions.push(portion);
      this.portion.size = '';
      this.portion.price = null;
      this.controlError = false;
    } else {
      this.controlError = true;
    }
  }

  deletePortion(index: number) {
    this.product.portions.splice(index, 1);
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.removeAt(index);
  }

  initItemRows() {
    return this.formBuilder.group({
      itemname: ['']
    });
  }

  createProduct() {
    console.log(this.product);
    if (this.product.category !== undefined && this.product.title !== '' && this.product.description !== '' && this.product.imageBinaryString !== '' && !this.isFirst) {
      this.isFill = 'filled';
      this.productService.addProduct(this.product);
    } else {
      this.isFill = 'notfilled';
    }
  }
}
