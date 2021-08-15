import { Order } from "./order";

export class Bill {
  _id: string = '';
  order: Order = new Order();
  amount: number = 0;
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "új" | "kifizetett" = "új";
}
