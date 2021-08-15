import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Bill } from 'src/app/model/bill';
import { Order } from 'src/app/model/order';
import { BillService } from 'src/app/service/bill.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  bill$: Observable<Bill> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params._id) {
        return this.billService.get(params._id)
      }
      return of(new Bill())
    })
  );
  orders$: Observable<Order[]> = this.orderService.getAll();
  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private billService: BillService,
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, bill: Bill): void {
    this.clicked = true;
    if (bill._id === '') {
      this.billService.create(form.value).subscribe(
        () => this.router.navigate(['bills']),
        err => console.error(err)
      );
    } else {
      // bill.amount = bill.order.price;
      this.billService.update(bill).subscribe(
        () => this.router.navigate(['bills']),
        err => console.error(err)
      );
    }
  }

}
