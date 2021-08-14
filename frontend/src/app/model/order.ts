import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
  _id: string = '';
  customer: Customer = new Customer();
  products: Product[] = [];
  amounts: number[] = [];
  price: number = 0;
  // orders:[{
  //   product: string;
  //   amount: number
  // }] = [{
  //   product: '',
  //   amount: 0
  // }];
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "új" | "kiszállított" | "kifizetett" = "új";
  note?: string = '';
}
