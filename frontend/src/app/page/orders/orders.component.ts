import { Component, OnInit } from '@angular/core';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderColumns: ITableColumn[] = this.config.orderColumns;
  entity: string = 'Orders';

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
