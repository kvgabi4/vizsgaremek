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
    {key: "firstName", title: "First Name"},
    {key: "lastName", title: "Last Name"},
    {key: "email", title: "Email"},
    {
      key: "address", title: "Address",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['zip', 'city', 'street']]
    },
    {key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign },
    {key: "coupon", title: "Coupon" },
    {key: "numberOfOrders", title: "Number of orders"},
  ];

  productColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "category", title: "Category"},
    {key: "price", title: "Price", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]},
    {key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign },
    {key: "image", title: "Image"},
    {key: "description", title: "Description"},
  ];

  orderColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {
      key: "customerId",
      title: "Customer",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['firstName', 'lastName']]
    },
    {key: "productIds", title: "Products"},
    {key: "time", title: "Time", pipes: [ConfigService.sqlDate]},
    {key: "amount", title: "Amount"},
    {key: "status", title: "Status"},
    {
      key: "note", title: "Note",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 15]]
    },
  ];

  billColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "orderId", title: "OrderId"},
    {key: "time", title: "Time", pipes: [ConfigService.sqlDate]},
    {key: "status", title: "Status"},
  ];

  constructor() { }

  static activeOrInactiveSign(v: boolean): string {
    const icon: string = v ? 'fa-check' : 'fa-ban';
    return `<i class="fas ${icon}"></i>`;
  }

  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(' ');
  }

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
