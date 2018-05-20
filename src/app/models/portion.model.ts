export class Portion {
  size: string;
  price: number;

  constructor(selectedPrice: number, selectedSize: string) {
    this.price = selectedPrice;
    this.size = selectedSize;
  }
}
