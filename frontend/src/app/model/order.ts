export class Order {
  _id: string = '';
  customerId: string = '';
  products:[{
    productId: string,
    amount: number
  }] = [{
    productId: '',
    amount: 0
  }];
  date: Date = new Date();
  status: "new" | "shipped" | "cancelled" = "new";
  note?: string = '';
}
