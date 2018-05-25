import {Portion} from './portion.model';
import {Category} from './category.model';

export class Product {
  id: number;
  title: string;
  description: string;
  category: Category;
  portions: Portion[];
  imageBinaryString: string;
  selectedPortion: Portion;
  count: number;

  constructor() {
    this.title = '';
    this.imageBinaryString = '';
    this.description = '';
    this.portions = [];
  }

  static getCopy(product: Product): Product {
    let copy = new Product();
    copy.id = product.id;
    copy.title = product.title;
    copy.description = product.description;
    if (product.count === undefined) {
      copy.count = 0;
    } else {
      copy.count = product.count;
    }
    copy.selectedPortion = new Portion(product.selectedPortion.size, product.selectedPortion.price);
    copy.imageBinaryString = product.imageBinaryString;
    copy.category = new Category();
    copy.category.title = product.category.title;
    copy.category.id = product.category.id;
    copy.portions = product.portions;
    return copy;
  }
}
