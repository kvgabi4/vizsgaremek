export class Order {
  _id: string = '';
  customerId: string = '';
  productIds: string[] = [];
  time: Date = new Date();
  amount: number = 0;
  status: "new" | "shipped" | "cancelled" = "new";
  note: string = '';
}
