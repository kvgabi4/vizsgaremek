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
  ];

  productColumns: ITableColumn[] = [
    {
      key: "_id", title: "Azonosító",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 8]]
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
    },

    {
      key: "product", title: "Termék",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 8]]
    },
    {
      key: "price", title: "Ár", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]
    },
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
    },
    {
      key: "amount", title: "Végösszeg", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]
    },
    {key: "date", title: "Dátum"},
    {key: "status", title: "Státusz"},
  ];

  userColumns: ITableColumn[] = [
    {
      key: "_id", title: "Azonosító",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 6]]
    },
    {key: "lastName", title: "Vezetéknév"},
    {key: "firstName", title: "Keresztnév"},
    {key: "email", title: "E-mail"},
    {key: "password", title: "Jelszó"},
    {key: "role", title: "Szerepkör"},
    {key: "active", title: "Aktív", htmlOutput: ConfigService.activeOrInactiveSign },
  ];


  constructor() {
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

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data ? data.slice(start, end) + curve : data;
  }
}
