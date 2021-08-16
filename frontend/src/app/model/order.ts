export class Order {
  _id: string = '';
  customer: string = '';
  product: string = '';
  quantity?: number = 1;
  price?: number = 0;
  date?: string = new Date().toLocaleDateString('hu-HU');
  status?: "új" | "kiszállított" | "kifizetett" = "új";
  note?: string = '';
}
