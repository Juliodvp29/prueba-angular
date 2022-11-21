import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[],  search: string = ""): User[] {
    if(search.length === 0)  return users;
    const filteredUsers = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLowerCase()))
    return filteredUsers;
  }

}
