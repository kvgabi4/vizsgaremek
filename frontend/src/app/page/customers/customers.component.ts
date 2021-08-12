import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerColumns: ITableColumn[] = this.config.customerColumns;
  list$: Observable<Customer[]> = this.customerService.getAll();
  entity: string = 'Vásárlók';
  filterKeys: string[][] = this.config.customerColumns.map(item => [item.key, item.title]);
  filterKey: string[] = this.filterKeys[1];

  constructor(
    private config: ConfigService,
    private customerService: CustomerService,
    private router: Router,
    private toastr: ToasterService
  ) {}

  ngOnInit(): void {
  }

  onSelectOne(customer: Customer): void {
    this.router.navigate(['/', 'customer', customer._id])
  }

  onDeleteOne(customer: Customer): void {
    if (window.confirm('Biztosan törli ezt a vásárlót?')) {
      this.customerService.remove(customer._id).subscribe(
        () => this.list$ = this.customerService.getAll()
      )
      this.toastr.showSuccessWithTimeout(`
        <table class="table">
          <thead>
            <tr>
              <th>Vásárló azonosítója</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${customer._id}</td>
            </tr>
          </tbody>
        </table>
        </span>`,
        "A vásárló sikeresen törlődött:",
        5000)
  }
  }
}
