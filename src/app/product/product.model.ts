import {Portion} from './portion.model';

export class Product {
  id: number;
  title: string;
  description: string;
  portions: Portion;
  price: number;
  imageBinaryString: string;
}
