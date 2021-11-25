export class Blog {
  id: number;
  name: string;
  description: string;
  img: string;

  constructor(id = 0, name = '', description = '', img = '') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;
  }
}
