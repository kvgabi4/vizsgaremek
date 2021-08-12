import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params._id) {
        return this.productService.get(params._id)
      }
      return of(new Product())
    })
  );

  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, product: Product): void {
    this.clicked = true;
    if (!product._id) {
      this.productService.create(product);
      this.router.navigate(['products']);
      } else {
        this.productService.update(product).subscribe(
          () => this.router.navigate(['products'])
        );
      }
      //console.log('onUpdate:',form.value, product)
  }

}
