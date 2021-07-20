import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsComponent } from './page/bills/bills.component';
import { CustomersComponent } from './page/customers/customers.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductsComponent } from './page/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'bills',
    component: BillsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
