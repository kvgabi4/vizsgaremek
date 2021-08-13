export class Product {
  _id: string = '';
  name: string = '';
  category: "alma" | "körte" | "kajszi" | "őszibarack" | "szilva" | "birs" = "alma";
  price: number = 0;
  active: boolean = true;
  image?: string = '';
  description: string = '';
}
