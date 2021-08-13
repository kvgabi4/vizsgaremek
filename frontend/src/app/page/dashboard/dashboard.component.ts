import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoCard } from 'src/app/common/info-card/info-card.component';
import { Bill } from 'src/app/model/bill';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { BillService } from 'src/app/service/bill.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { ChartDataSets } from 'chart.js';
import { switchMap } from 'rxjs/operators';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  billList$: Observable<Bill[]> = this.billService.getAll();
  customerList$: Observable<Customer[]> = this.customerService.getAll();
  orderList$: Observable<Order[]> = this.orderService.getAll();
  productList$: Observable<Product[]> = this.productService.getAll();

  notPaidOrders = this.orderList$.pipe(switchMap(async params => await params
    .filter(item => item.status === 'új' || item.status === 'kiszállított')?.length));

  activeCustomers = this.customerList$.pipe(switchMap(async params => await params
    .filter(item => item.active)?.length));

  activeProducts = this.productList$.pipe(switchMap(async params => await params
    .filter(item => item.active)?.length));

  notPaidBillsAmount = this.billList$.pipe(switchMap(async params => await params
    .filter(item => item.status === 'új')?.length));
    // .reduce((acc, one) => acc + parseInt('' + one.order.amount), 0));


  cards: InfoCard[] = [
    {
      title: 'Vásárlók',
      content: this.activeCustomers,
      cardClass: 'bg-warning',
      footer: 'Aktív vásárlók',
      icon: 'fas fa-user-alt',
      unit: 'db',
    },
    {
      title: 'Termékek',
      content: this.activeProducts,
      cardClass: 'bg-success',
      footer: 'Aktív termékek',
      icon: 'fas fa-seedling',
      unit: 'db',
    },
    {
      title: 'Megrendelések',
      content: this.notPaidOrders,
      cardClass: 'bg-primary',
      footer: 'Kifizetetlen megrendelések',
      icon: 'fas fa-table',
      unit: 'db',
    },
    {
      title: 'Számlák',
      content: this.notPaidBillsAmount,
      cardClass: 'bg-info',
      footer: 'Kifizetetlen számlák',
      icon: 'fas fa-receipt',
      unit: 'Ft',
    }
  ];

  orderChartLabels: Label[] = [''];
  orderChartData: ChartDataSets[] = [
    {
      data: [0],
      label: 'új  ',
      borderColor: ['#fff'],
      borderWidth: [2]
    },
    {
      data: [0],
      label: 'kiszállított  ',
      borderColor: ['#fff'],
      borderWidth: [2]
    },
    {
      data: [0],
      label: 'kifizetett',
      borderColor: ['#fff'],
      borderWidth: [2]
    },
  ];
  orderChartColor: Color[] = [
    { // first color
      // backgroundColor: ['#ff9800']
      backgroundColor: ['rgba(255,200,255,.8)']
    },
    { // second color
      // backgroundColor: ['#4caf50']
      backgroundColor: ['rgba(200,110,170,.8)']
    },
    { // third color
      // backgroundColor: ['#00bcd4']
      backgroundColor: ['rgba(210,160,210,.8)']
    },
  ];

  billChartData: ChartDataSets[] = [{ data: [0, 0] }];
  billChartLabels: Label[] = ['új számlák száma', 'kifizetett számlák száma'];
  billChartColor: Color[] = [
    {
      // backgroundColor: ['#ff9800', '#4caf50', '#00bcd4']
      backgroundColor: ['rgba(0,230,230,.9)', 'rgba(10, 160, 180, 0.9)']
    }
  ];

  billSumChartLabels: Label[] = ['új számlák összege', 'kifizetett számlák összege'];
  billSumChartData: ChartDataSets[] = [{ data: [0, 0] }];
  billSumChartColor: Color[] = [
    {
      // backgroundColor: ['#ff9800', '#8e24aa']
      backgroundColor: ['rgba(0,170,170,.9)', 'rgba(10, 110, 130, 0.9)']
    }
  ];

  productAllChartData: ChartDataSets[] = [];
  productAllChartLabels: Label[] = [];
  productAllChartColor: Color[] = [];

  productChartData: ChartDataSets[] = [
      {
        data: [0],
        label: 'aktív  ',
        borderColor: ['#fff'],
        borderWidth: [2]
      },
      {
        data: [1],
        label: 'inaktív  ',
        borderColor: ['#fff'],
        borderWidth: [2]
      }
  ];
  productChartLabels: Label[] = [''];
  productChartColor: Color[] = [
    // {
    //   backgroundColor: ['#ff9800']
    // },
    // {
    //   backgroundColor: ['#8e24aa']
    // },
    // {
    //   backgroundColor: ['#00bcd4']76 175 80
    // },
    {
      backgroundColor: ['rgba(180, 250, 150, 0.9)']
    },
    {
      backgroundColor: ['rgba(110, 215, 110, 0.9)']
    },
    {
      backgroundColor: ['rgba(255,255,200,.8)']
    },
  ];

  customerChartData: ChartDataSets[] = [
    {
    data: [0, 0],
    // borderColor: ['#fff'],
    // borderWidth: [0]
  },
  ];
  customerChartLabels: Label[] = ['aktív vásárlók', 'inaktív vásárlók'];
  customerChartColor: Color[] = [
    {
      backgroundColor: ['rgba(255, 190, 20, 0.9)', 'rgba(255,255,150,.8)']
      // backgroundColor: [ '#4caf50', '#00bcd4' ]
    }
  ];

  constructor(
    private billService: BillService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.orderList$.subscribe(
      data => {
        // Order chart.
        const newOrders: number =
          data.filter(o => o.status === 'új').length;
        const shippedOrders: number =
          data.filter(o => o.status === 'kiszállított').length;
        const paidOrders: number =
          data.filter(o => o.status === 'kifizetett').length;

        this.orderChartData[0].data = [newOrders];
        this.orderChartData[1].data = [shippedOrders];
        this.orderChartData[2].data = [paidOrders];
      }
    );

    this.billList$.subscribe(
      data => {
        // Bill chart.
        const newBills: number =
          data.filter(o => o.status === 'új').length;
        const paidBills: number =
          data.filter(o => o.status === 'kifizetett').length
        // const newBillsSum: number =
        //   data.filter(o => o.status === 'új').
        //   reduce((acc, one) => acc + parseInt('' + one.amount), 0)
        // const paidBillsSum: number =
        //   data.filter(o => o.status === 'kifizetett').
        //     reduce((acc, one) => acc + parseInt('' + one.amount), 0)

        this.billChartData[0].data = [newBills, paidBills];
        // this.billSumChartData[0].data = [newBillsSum, paidBillsSum];
        // console.log(this.billChartData)
      }
    );

    this.productList$.subscribe(
      data => {
        // Product chart.
        const activeProducts: number =
          data.filter(o => o.active).length;
        const inactiveProducts: number =
          data.filter(o => !o.active).length;
        // const activeAndFeaturedProducts: number =
        //   data.filter(o => o.active && o.featured).length;

        data.forEach((o, i) => {
            Math.random()
            this.productAllChartData[i]=
              {
                data: [o.price],
                label: o.name,
                borderColor: ['#fff'],
                borderWidth: [2],
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)},
                                       ${Math.floor(Math.random() * 255)},
                                       ${Math.floor(Math.random() * 255)},
                                       .7)`,
              };
            // this.productAllChartLabels[i] = [o.name];
          });

        this.productChartData[0].data = [ activeProducts ];
        this.productChartData[1].data = [ inactiveProducts ];
        // this.productChartData[2].data = [ activeAndFeaturedProducts ];
        // console.log(this.productAllChartData, this.productAllChartLabels)
      }
    );

    this.customerList$.subscribe(
      data => {
        // Customer chart.
        const activeCustomers: number =
          data.filter(o => o.active).length;
        const inactiveCustomers: number =
          data.filter(o => o.active === false ).length;

        this.customerChartData[0].data = [ activeCustomers, inactiveCustomers ];
        // console.log(this.customerChartData)
      }
    );

    this.billService.getAll();
    this.customerService.getAll();
    this.orderService.getAll();
    this.productService.getAll();
  }

}
