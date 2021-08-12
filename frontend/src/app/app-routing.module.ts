import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillEditComponent } from './page/bill-edit/bill-edit.component';
import { BillsComponent } from './page/bills/bills.component';
import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { CustomersComponent } from './page/customers/customers.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'bill/:_id',
    component: BillEditComponent,
  },
  {
    path: 'customer/:_id',
    component: CustomerEditComponent,
  },
  {
    path: 'order/:_id',
    component: OrderEditComponent,
  },
  {
    path: 'product/:_id',
    component: ProductEditComponent,
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
