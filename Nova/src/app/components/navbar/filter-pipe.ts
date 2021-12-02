import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string): any {
         if  (!search) {return value; }
      return value.filter((v: string) => {
          if (!v) {
            throw new Error("!v");
          }
          return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;

        });
    }
}
