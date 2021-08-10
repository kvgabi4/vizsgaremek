export class Bill {
  _id: string = '';
  orderId: string = '';
  date: Date = new Date();
  status: "new" | "paid" = "new";
}
