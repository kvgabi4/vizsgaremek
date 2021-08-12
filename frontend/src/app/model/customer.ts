import { Order } from "./order";

export class Customer {
  _id: string = '';
  firstName: string = '';
  lastName: string = '';
  address: {
      zip: string,
      city: string,
      street: string
    } = {
      zip: '',
      city: '',
      street: ''
    };
  email: string = '';
  phone: string = '';
  active: boolean = true;
  orders?: Order[] = [];
}
