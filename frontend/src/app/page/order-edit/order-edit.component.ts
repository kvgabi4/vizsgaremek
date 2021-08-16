import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params._id) {
        return this.orderService.get(params._id)
      }
      return of(new Order())
    })
  );

  customers$: Observable<Customer[]> = this.customerService.getAll();
  products$: Observable<Product[]> = this.productService.getAll();
  price: number = 0;
  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, order: Order): void {
    this.clicked = true;
    if (order._id === '') {
      this.orderService.create(form.value).subscribe(
        () => this.router.navigate(['orders']),
        err => console.error(err)
      )

    } else {
      this.orderService.update(order).subscribe(
        () => this.router.navigate(['orders']),
        err => console.error(err)
      );
    }
  }

}
