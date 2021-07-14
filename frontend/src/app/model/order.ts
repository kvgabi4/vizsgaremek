export class Order {
  _id: string = '';
  customerId: string = '';
  productIds: string[] = [];
  amount: number = 0;
  status: "new" | "shipped" | "cancelled" = "new";
}
