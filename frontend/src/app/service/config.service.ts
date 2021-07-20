import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';

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
    {key: "address", title: "Address",
      // pipes: [ConfigService.getSubProperty],
      // pipeArgs: [['country', 'city', 'street']]
    },
    // {key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign },
    {key: "active", title: "Active"},
    {key: "coupon", title: "Coupon" },
    {key: "numberOfOrders", title: "Number of orders"},
  ];

  productColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "category", title: "Category"},
    {key: "price", title: "Price", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]},
    // {key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign },
    // {key: "price", title: "Price", },
    {key: "active", title: "Active", },
    {key: "image", title: "Image"},
    {key: "description", title: "Description"},
  ];

  orderColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {
      key: "customer",
      title: "Customer",
      // pipes: [ConfigService.getSubProperty],
      // pipeArgs: [['firstName', 'lastName']]
    },
    {key: "products", title: "Products"},
    // {key: "time", title: "Time", pipes: [ConfigService.sqlDate]},
    {key: "time", title: "Time",},
    {key: "note", title: "Note",
      // pipes: [ConfigService.curveLongString],
      // pipeArgs: [[0, 15]]
    },
  ];

  billColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {
      key: "user",
      title: "User",
      // pipes: [ConfigService.getSubProperty],
      // pipeArgs: [['firstName', 'lastName']]
    },
    {key: "products", title: "Products"},
    // {key: "time", title: "Time", pipes: [ConfigService.sqlDate]},
    {key: "time", title: "Time",},
    {key: "note", title: "Note",
      // pipes: [ConfigService.curveLongString],
      // pipeArgs: [[0, 15]]
    },
  ];

  constructor() { }
}
