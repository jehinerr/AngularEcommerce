export class Product {
  public id: number;
  public title: string;
  public price: number;
  public image: string;

  constructor(id: number, title: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
  }
}
