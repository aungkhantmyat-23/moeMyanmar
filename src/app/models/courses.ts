export class Course{
    id:number;
    name:string;
    category:string;
    description:string;
    access:string;
    duration:number;
    certificate:boolean;
    price:number;

    constructor(id,name,category,description,access,duration,certificate,price){
        this.id=id;
        this.name=name;
        this.category=category;
        this.description=description;
        this.access=access;
        this.duration=duration;
        this.certificate=certificate;
        this.price=price;
    }
}