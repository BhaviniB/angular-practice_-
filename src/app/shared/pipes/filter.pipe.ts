
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */

  constructor() {}
  transform(items: any[], searchText: string): any[] {
      debugger
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    } else {
      searchText = searchText.toLocaleLowerCase();

      return items.filter((it) => {
        return it.productName.toLocaleLowerCase().includes(searchText);
      });
    }
  }
}
