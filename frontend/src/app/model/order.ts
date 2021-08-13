import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
  _id: string = '';
  customer: string = '';
  products: Product[] = [];
  // products:[{
  //   productId: string,
  //   amount: number
  // }] = [{
  //   productId: '',
  //   amount: 0
  // }];
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "new" | "shipped" | "cancelled" = "new";
  note?: string = '';
}
