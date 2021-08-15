import { Order } from "./order";

export class Bill {
  _id: string = '';
  order: string = '';
  amount: number = 0;
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "új" | "kifizetett" | "stornózott" = "új";
}
