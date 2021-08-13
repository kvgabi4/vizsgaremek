export class Bill {
  _id: string = '';
  order: string = '';
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "új" | "kifizetett" = "új";
}
