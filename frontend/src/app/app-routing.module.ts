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
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { UsersComponent } from './page/users/users.component';

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
    path: 'users',
    component: UsersComponent,
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
    path: 'user/:_id',
    component: UserEditComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
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
