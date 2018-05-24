import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {Portion} from '../models/portion.model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.css']
})
export class AddProductPageComponent implements OnInit {

  public invoiceForm: FormGroup;

  product: Product;
  portion: Portion;
  isFirst = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.product = new Product();
    this.product.portions = [];
    this.portion = new Portion('', null);
    this.product.description = '';
    this.product.portions.push(this.portion);
    this.invoiceForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows()])
    });
  }

  onKey(event: any) {
    console.log(this.product);
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

  addPortion() {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.push(this.initItemRows());
    if (this.portion.size !== '' && this.portion.price !== null) {
      if (this.isFirst) {
        this.product.portions.pop();
        this.isFirst = false;
      }
      let size = this.portion.size;
      let price = this.portion.price;
      let portion = new Portion(size, price);
      this.product.portions.push(portion);
    }
  }

  deletePortion(index: number) {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.removeAt(index);
  }

  initItemRows() {
    return this.formBuilder.group({
      itemname: ['']
    });
  }
}
