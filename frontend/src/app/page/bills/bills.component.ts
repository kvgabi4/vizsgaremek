import { Component, OnInit } from '@angular/core';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  billColumns: ITableColumn[] = this.config.billColumns;
  entity: string = 'Bills';

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
