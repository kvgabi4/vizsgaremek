import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './model/bill';
import { Customer } from './model/customer';
import { Order } from './model/order';
import { Product } from './model/product';
import { CustomerService } from './service/customer.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  products: Observable<Product[]> = this.productService.getAll();
  customers: Observable<Customer[]> = this.customerService.getAll();
  orders: Observable<Order[]> = this.orderService.getAll();
  bills: Observable<Bill[]> = this.billService.getAll();

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private billService: BillService,
  ) {}
}
