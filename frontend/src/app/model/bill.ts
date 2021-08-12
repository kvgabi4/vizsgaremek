export class Bill {
  _id: string = '';
  order: string = '';
  date: Date = new Date();
  status: "új" | "kifizetett" = "új";
}
