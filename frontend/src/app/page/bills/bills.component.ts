import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private billService: BillService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(bill: Bill): void {
    this.router.navigate(['/', 'bill', bill._id])
  }

  onDeleteOne(bill: Bill): void {
    this.billService.remove(bill._id).subscribe(
      () => this.list$ = this.billService.getAll()
      )
  }
}
