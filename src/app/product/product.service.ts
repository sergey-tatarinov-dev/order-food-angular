import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Product} from '../model/product.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {
  private url = '/api/';

  constructor(private http: HttpClient) {
  }

  public getProducts() {
    return this.http.get<Product[]>(this.url);
  }
}
