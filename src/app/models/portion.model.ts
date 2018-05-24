export class Portion {
  size: string;
  price: number;

  constructor(selectedSize: string, selectedPrice: number) {
    this.price = selectedPrice;
    this.size = selectedSize;
  }
}
