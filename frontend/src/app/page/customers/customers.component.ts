import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerColumns: ITableColumn[] = this.config.customerColumns;
  list$: Observable<Customer[]> = this.customerService.getAll();
  entity: string = 'Customers';

  constructor(
    private config: ConfigService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

}
