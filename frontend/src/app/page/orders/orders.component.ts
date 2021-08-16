import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  columns: ITableColumn[] = this.config.orderColumns;
  list$: Observable<Order[]> = this.orderService.getAll();
  entity: string[] = ['order', 'Megrendelések'];
  filterKeys: string[][] = this.config.orderColumns.map(item => [item.key, item.title]);
  filterKey: string[] = this.filterKeys[1];
  color: string[] = ['bg-primary', 'btn-outline-primary'];
  phrase: string = '';

  constructor(
    private config: ConfigService,
    private orderService: OrderService,
    private router: Router,
    private toastr: ToasterService
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(order: Order): void {
    this.router.navigate(['/', 'order', order._id])
  }

  onDeleteOne(order: Order): void {
    if (window.confirm('Biztosan törli ezt a megrendelést?')) {
      this.orderService.remove(order._id).subscribe(
        () => this.list$ = this.orderService.getAll()
      );
      this.toastr.showSuccessWithTimeout(`
        <table class="table">
          <thead>
            <tr>
              <th>Megrendelés azonosítója</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${order._id}</td>
            </tr>
          </tbody>
        </table>
        </span>`,
        "A megrendelés sikeresen törlődött:",
        5000)
    }
  }
}
