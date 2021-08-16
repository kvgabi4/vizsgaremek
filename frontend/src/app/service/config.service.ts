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
    {
      key: "_id", title: "Azonosító",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 6]]
    },
    {key: "lastName", title: "Vezetéknév"},
    {key: "firstName", title: "Keresztnév"},
    {key: "email", title: "E-mail"},
    {
      key: "address", title: "Cím",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['zip', 'city', 'street']]
    },
    {key: "active", title: "Aktív", htmlOutput: ConfigService.activeOrInactiveSign },
    // {key: "orders", title: "Megrendelések" }
  ];

  productColumns: ITableColumn[] = [
    {
      key: "_id", title: "Azonosító",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 6]]
    },
    {key: "name", title: "Megnevezés"},
    {key: "category", title: "Kategória"},
    {key: "price", title: "Ár", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]},
    {key: "active", title: "Aktív", htmlOutput: ConfigService.activeOrInactiveSign },
    {key: "image", title: "Kép", htmlOutput:ConfigService.showImage},
    {
      key: "description", title: "Leírás",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 15]]
    },
  ];

  orderColumns: ITableColumn[] = [
    {
      key: "_id", title: "Azonosító",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 8]]
    },
    {
      key: "customer", title: "Vásárló",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 8]]
      // pipes: [ConfigService.setNames],
      // pipeArgs: [['customer.firstName', 'customer.lastName']]
    },
    // { key: "products", title: "Termékek" },

    // {
    //   key: "products", title: "Termékek",
    //   pipes: [ConfigService.getArrayItems],
    //   pipeArgs: [['name']]
    // },
    // {
    //   key: "amounts", title: "Mennyiségek",
    //   // pipes: [ConfigService.getArrayItems],
    //   // pipeArgs: [['name']]
    // },
    // {key: "price", title: "Ár összesen", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]},

    {
      key: "product", title: "Termék",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 8]]
      // pipes: [ConfigService.getArrayItems],
      // pipeArgs: [['name']]
    },
    {
      key: "price", title: "Ár",
      // pipes: [ConfigService.getArrayItems],
      // pipeArgs: [['name']]
    },

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
    {
      key: "_id", title: "Azonosító",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 8]]
    },
    {
      key: "order", title: "Megrendelés száma",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 8]]
      // pipes: [ConfigService.setData],
      // pipes: [ConfigService.curveLongString],
      // pipeArgs: [[0, 6]]
    },
    {
      key: "amount", title: "Végösszeg",
      // pipes: [ConfigService.curveLongString],
      // pipeArgs: [[0, 6]]
    },
    {key: "date", title: "Dátum"},
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

  static getArrayItems(arr: any[], key: string): any[] {
    return arr.map(item => ` ${item.name} ${item.category}`);
  }

  static setData(data: any): string {
    return `${data._id}`
  }

  static setNames(data: any, key: string): string {
    return `${data.lastName} ${data.firstName}`
  }

  static showImage(url: string): string {
    return `<img
              src="http://localhost:3000/${url}"
              alt="${url}"
              class="product_image"
            >`;
  }



  // static sqlDate(jsTime: number): string | number | boolean | undefined {
  //   const options: Intl.DateTimeFormatOptions = {
  //     year: 'numeric',
  //     month: 'numeric',
  //     day: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric'
  //   };
  //   return Intl.DateTimeFormat('hu', options).format(jsTime);
  // }

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data ? data.slice(start, end) + curve : data;
  }
}
