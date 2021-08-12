import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
  _id: string = '';
  customer: Customer = new Customer();
  products: Product[] = [];
  // products:[{
  //   productId: string,
  //   amount: number
  // }] = [{
  //   productId: '',
  //   amount: 0
  // }];
  date: Date = new Date();
  status: "new" | "shipped" | "cancelled" = "new";
  note?: string = '';
}
