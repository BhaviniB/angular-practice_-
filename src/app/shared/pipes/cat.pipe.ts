
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'catFilter' })
export class CatPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */

  constructor() {}
  transform(items: any[], category: string): any[] {
      debugger
    if (!items) {
      return [];
    }
    if (!category 
        || category=='All'
        ) {
      return items;
    } else {
    //   searchText = searchText.toLocaleLowerCase();

      return items.filter((it) => {
        return it.category == category;
      });
    }
  }
}
