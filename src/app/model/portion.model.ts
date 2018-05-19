export class Portion {
  size: string;
  price: number;

  constructor(selectedPrice: number, selectedValue: string) {
    this.price = selectedPrice;
    this.size = selectedValue;
  }
}
