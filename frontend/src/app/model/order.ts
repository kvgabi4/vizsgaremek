import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
  _id: string = '';
  // customer: Customer = new Customer();
  customer: string = '';
  product: string = '';
  // product: Product = new Product();
  quantity: number = 1;
  price: number = 0;
  // amounts: number[] = [];
  // price: number = 0;
  // orders:[{
  //   // product: string;
  //   amount: number;
  //   price: number;
  // }] = [{
  //   // product: '',
  //   amount: 0,
  //   price: 0
  // }];
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "új" | "kiszállított" | "kifizetett" = "új";
  note?: string = '';
}
