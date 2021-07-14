export class Order {
  _id: string = '';
  customerId: string = '';
  productId: string = '';
  amount: number = 0;
  status: "new" | "paid" | "shipped" = "new";
}
