import { Component, OnInit } from '@angular/core';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productColumns: ITableColumn[] = this.config.productColumns;
  entity: string = 'Products';

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
