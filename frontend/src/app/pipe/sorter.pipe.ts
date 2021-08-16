import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sorter' })

export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, column: string, direct: boolean): any[] | null {

    if (!Array.isArray(value) || !column) {
      return value;
    }
    // if (column === 'address') {
    //   value = value.map(item => `${item.address.zip} ${item.address.city} ${item.address.street}`)
    //   console.log(value)
    // }

    return value.sort(function (a: any, b: any) {

      if (typeof a[column] === 'number' && typeof b[column] === 'number') {
        if (direct) {
          return a[column] - b[column];
        }
        return b[column] - a[column];
      } else {
        if (typeof a[column] === 'object') {
          if (direct) {
            return a[column].zip - b[column].zip;
          }
          return b[column].zip - a[column].zip;
        }
        const aA: string = ('' + a[column]).toLowerCase();
        const bB: string = ('' + b[column]).toLowerCase();
        if (direct) {
          return aA.localeCompare(bB);
        }
        return bB.localeCompare(aA);
      }
    });
  }
}
