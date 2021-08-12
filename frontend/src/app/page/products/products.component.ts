import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productColumns: ITableColumn[] = this.config.productColumns;
  list$: Observable<Product[]> = this.productService.getAll();
  entity: string = 'Termékek';
  filterKeys: string[][] = this.config.productColumns.map(item => [item.key, item.title]);
  filterKey: string[] = this.filterKeys[1];


  constructor(
    private config: ConfigService,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(product: Product): void {
    this.router.navigate(['/', 'product', product._id])
  }

  onDeleteOne(product: Product): void {
    this.productService.remove(product._id).subscribe(
      () => this.list$ = this.productService.getAll()
      )
  }
}
