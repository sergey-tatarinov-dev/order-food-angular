import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products, value) {
    console.log('filtering...');
    return products.filter(product => {
      return product.title.includes(value);
    });
  }

}
