import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  billColumns: ITableColumn[] = this.config.billColumns;
  list$: Observable<Bill[]> = this.billService.getAll();
  entity: string = 'Számlák';
  filterKeys: string[][] = this.config.billColumns.map(item => [item.key, item.title]);
  filterKey: string[] = this.filterKeys[1];


  constructor(
    private config: ConfigService,
    private billService: BillService
  ) { }

  ngOnInit(): void {
  }

}
