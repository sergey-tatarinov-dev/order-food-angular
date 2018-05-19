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
}
