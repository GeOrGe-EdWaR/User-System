import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './users';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(list: Users[], searchText: string): Users[] {
    return list.filter((item) => {
      return item.firstName.toLowerCase().includes(searchText.toLowerCase())||item.lastName.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
