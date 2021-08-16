import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  columns: ITableColumn[] = this.config.billColumns;
  list$: Observable<Bill[]> = this.billService.getAll();
  entity: string[] = ['bill', 'Számlák'];
  filterKeys: string[][] = this.config.billColumns.map(item => [item.key, item.title]);
  filterKey: string[] = this.filterKeys[1];
  color: string[] = ['bg-info', 'btn-outline-info'];

  constructor(
    private config: ConfigService,
    private billService: BillService,
    private router: Router,
    private toastr: ToasterService
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(bill: Bill): void {
    this.router.navigate(['/', 'bill', bill._id])
  }

  onStornoOne(bill: Bill): void {
    if (window.confirm('Biztosan stornózza ezt a számlát?')) {
      bill.status = "stornózott"
      this.billService.update(bill).subscribe(
        () => this.list$ = this.billService.getAll()
      );
      this.toastr.showSuccessWithTimeout(`
        <table class="table">
          <thead>
            <tr>
              <th>Számla azonosítója</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${bill._id}</td>
            </tr>
          </tbody>
        </table>
        </span>`,
        "A számla sikeresen törlődött:",
        5000)
  }
  }
}
