import {Pipe, PipeTransform} from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string): any {
         if  (!search) {return value; }
      return value.filter((v: Product) => {
          if (!v) {
            throw new Error("!v");
          }
          
        
         return v.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;

        });
    }
}
