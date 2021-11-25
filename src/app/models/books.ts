export class Book {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;

  constructor(id , name , description , price, img) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
  }
}
