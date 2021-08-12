import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { get } from 'lodash';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  outputTransform?: any;
  htmlOutput?: any;
  pipes?: any[];
  pipeArgs?: [any[]];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  customerColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "lastName", title: "Vezetéknév"},
    {key: "firstName", title: "Keresztnév"},
    {key: "email", title: "E-mail"},
    {
      key: "address", title: "Cím",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['zip', 'city', 'street']]
    },
    {key: "active", title: "Aktív", htmlOutput: ConfigService.activeOrInactiveSign },
    {key: "orders", title: "Megrendelések" }
  ];

  productColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Megnevezés"},
    {key: "category", title: "Kategória"},
    {key: "price", title: "Ár", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]},
    {key: "active", title: "Aktív", htmlOutput: ConfigService.activeOrInactiveSign },
    {key: "image", title: "Kép"},
    {key: "description", title: "Leírás"},
  ];

  orderColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {
      key: "customer",
      title: "Vásárló",
      // pipes: [ConfigService.getSubProperty],
      // pipeArgs: [['customer.firstName', 'customer.lastName']]
    },
    { key: "products", title: "Termékek" },
    // {
    //   key: "products", title: "Termékek",
    //   pipes: [ConfigService.getSubProperty],
    //   pipeArgs: [['product[name]']]
    // },
    // {key: "products[0].amounts", title: "Mennyiségek"},
    // db.json:
    // "products": [
    //   {
    //     "productId": "987fgh",
    //     "amount": 3
    //   },
    //   {
    //     "productId": "999fff",
    //     "amount": 15
    //   }
    // ],


    // {key: "date", title: "Dátum", pipes: [ConfigService.sqlDate]},
    {key: "date", title: "Dátum"},
    {key: "status", title: "Státusz"},
    {
      key: "note", title: "Megjegyzés",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 15]]
    },
  ];

  billColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "orderId", title: "Megrendelés"},
    {key: "date", title: "Dátum", pipes: [ConfigService.sqlDate]},
    {key: "status", title: "Státusz"},
  ];

  constructor() {
    console.log(this.orderColumns)
   }

  static activeOrInactiveSign(v: boolean): string {
    const icon: string = v ? 'fa-check' : 'fa-ban';
    return `<i class="fas ${icon}"></i>`;
  }

  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(' ');
  }

  // static getArrayItems(arr: (string | number)[], keys: string): any[] {
  //   return arr.map( item => ConfigService.getSubProperty(item, keys));
  // }

  static sqlDate(jsTime: number): string | number | boolean | undefined {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return Intl.DateTimeFormat('hu', options).format(jsTime);
  }

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data ? data.slice(start, end) + curve : data;
  }
}
