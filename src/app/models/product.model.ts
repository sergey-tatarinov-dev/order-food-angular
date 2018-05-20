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

  constructor(product: Product) {
    this.id = product.id;
    this.title = product.title;
    this.description = product.description;
    if (product.count === undefined) {
      this.count = 0;
    } else {
      this.count = product.count;
    }
    this.selectedPortion = new Portion(product.selectedPortion.price, product.selectedPortion.size);
    this.imageBinaryString = product.imageBinaryString;
    this.category = new Category();
    this.category.title = product.category.title;
    this.category.id = product.category.id;
    this.portions = product.portions;
  }
}
