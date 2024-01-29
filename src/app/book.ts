export interface IBook {
    id: number;
    name: string;
    author: string;
    imgurl: string;
    rating: number;
    discount: number;
    mrp: number;
    summary: string;
  }
  
  export class Book implements IBook {
    public id: number=0;
    public author: string = "";
    public name: string = "";
    public imgurl: string;
    public rating: number = 0;
    public discount: number = 0;
    public mrp: number = 0;
    public summary: string = "";
  
    constructor(id: number, name: string, author: string, imgurl: string, rating: number, discount: number, mrp: number, summary: string) {
      this.id = id;
      this.name = name;
      this.author = author;
      this.imgurl = imgurl;
      this.rating = rating;
      this.discount = discount;
      this.mrp = mrp;
      this.summary = summary;
    }
  }
  