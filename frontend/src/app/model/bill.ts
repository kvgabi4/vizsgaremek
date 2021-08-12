export class Bill {
  _id: string = '';
  order: string = '';
  date: Date = new Date();
  status: "new" | "paid" = "new";
}
