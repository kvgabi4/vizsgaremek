export class Customer {
  _id: string = '';
  name: string = '';
  billAddress: string = '';
  deliveryAddress?: string = '';
  email: string = '';
  phone: number = 0;
  registration: boolean = true;
  coupon: number = 0;
  numberOfOrders: number = 0;
}
