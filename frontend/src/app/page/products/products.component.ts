import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  columns: ITableColumn[] = this.config.productColumns;
  list$: Observable<Product[]> = this.productService.getAll();
  entity: string[] = ['product', 'Termékek'];
  filterKeys: string[][] = this.config.productColumns.map(item => [item.key, item.title]);
  filterKey: string[] = this.filterKeys[1];
  color: string[] = ['bg-success', 'btn-outline-success'];

  constructor(
    private config: ConfigService,
    private productService: ProductService,
    private router: Router,
    private toastr: ToasterService
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(product: Product): void {
    this.router.navigate(['/', 'product', product._id])
  }

  onDeleteOne(product: Product): void {
    if (window.confirm('Biztosan törli ezt a terméket?')) {
      this.productService.remove(product._id).subscribe(
        () => this.list$ = this.productService.getAll()
      )
      this.toastr.showSuccessWithTimeout(`
      <table class="table">
        <thead>
          <tr>
            <th>Termék azonosítója</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${product._id}</td>
          </tr>
        </tbody>
      </table>
      </span>`,
        "A termék sikeresen törlődött:",
        5000)
    }
  }
}
