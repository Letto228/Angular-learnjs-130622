import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe<T> implements PipeTransform {

  transform(
    values: T[] | undefined | null,
    searchText: string,
    searchProperty: keyof T
  ): T[] | null {
    if(values) {
      values = values.filter((item) => {
        if(typeof item[searchProperty] == 'string') {
          const name = item[searchProperty] as unknown as string;

          if (name.indexOf(searchText) == -1) {
            return null;
          }
        }

        return item;
      });


      return values;
    }

    return null;
  }

}
