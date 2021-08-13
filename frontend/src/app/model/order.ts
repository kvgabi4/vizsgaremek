import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
  _id: string = '';
  customer: Customer = new Customer();
  products: Product[] = [];
  amounts: number[] = [];
  // orders:[{
  //   product: string;
  //   amount: number
  // }] = [{
  //   product: '',
  //   amount: 0
  // }];
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "new" | "shipped" | "cancelled" = "new";
  note?: string = '';
}
