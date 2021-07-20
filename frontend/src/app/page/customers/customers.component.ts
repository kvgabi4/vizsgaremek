import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerColumns: ITableColumn[] = this.config.customerColumns;
  entity: string = 'Customers';

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
