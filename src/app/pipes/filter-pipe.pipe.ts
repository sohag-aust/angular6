import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, searchTerm?) {
    if(value.length === 0) return value; // means till now we do not type any value in search field

    return value.filter( (search) => {
      // return search.pname.indexOf(searchTerm) > -1;
      return search.pname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}
