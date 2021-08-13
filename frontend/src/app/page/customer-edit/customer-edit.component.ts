import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customer$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params._id) {
        return this.customerService.get(params._id)
      }
      return of(new Customer())
    })
  );

  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, customer: Customer): void {
    this.clicked = true;
    if (customer._id === '') {
      this.customerService.create(form.value).subscribe(
        () => this.router.navigate(['customers']),
        err => console.error(err)
      );
    } else {
      this.customerService.update(customer).subscribe(
        () => this.router.navigate(['customers']),
        err => console.error(err)
      );
    }
  }

}
