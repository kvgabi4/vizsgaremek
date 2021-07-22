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
    {key: "email", title: "Email"},
    {
      key: "address", title: "Cím",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['zip', 'city', 'street']]
    },
    {key: "active", title: "Aktív", htmlOutput: ConfigService.activeOrInactiveSign },
    {key: "coupon", title: "Kupon" }
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
      key: "customerId",
      title: "Vásárló",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['firstName', 'lastName']]
    },
    {key: "productIds", title: "Termékek"},
    {key: "time", title: "Dátum", pipes: [ConfigService.sqlDate]},
    {key: "amount", title: "Összeg"},
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
    {key: "time", title: "Dátum", pipes: [ConfigService.sqlDate]},
    {key: "status", title: "Státusz"},
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
