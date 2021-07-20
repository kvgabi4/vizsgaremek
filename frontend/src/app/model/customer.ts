export class Customer {
  _id: string = '';
  firstName: string = '';
  lastName: string = '';
  address: {
      "zip": string | number,
      "city": string,
      "street": string
    } = {
      "zip": '',
      "city": '',
      "street": ''
    };
  email: string = '';
  phone: string = '';
  active: boolean = true;
  coupon: number = 0;
  numberOfOrders: number = 0;
}
