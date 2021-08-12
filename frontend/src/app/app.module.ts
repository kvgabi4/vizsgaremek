import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

registerLocaleData(localeHu);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BillsComponent } from './page/bills/bills.component';
import { CustomersComponent } from './page/customers/customers.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductsComponent } from './page/products/products.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { XPipePipe } from './pipe/x-pipe.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { LoginComponent } from './page/login/login.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { BillEditComponent } from './page/bill-edit/bill-edit.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    BillsComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    DataTableComponent,
    XPipePipe,
    FilterPipe,
    LoginComponent,
    ProductEditComponent,
    CustomerEditComponent,
    OrderEditComponent,
    BillEditComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'hu-HU'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
