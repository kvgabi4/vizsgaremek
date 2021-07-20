export class Bill {
  _id: string = '';
  orderId: string = '';
  time: Date = new Date();
  status: "new" | "paid" = "new";
}
