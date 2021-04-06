import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchCritera: string): User[] {
    let selectedUsers: User[] = [];
    if(searchCritera.length == 0) {
      return users;
    }
    for(let user of users) {
      if(
        user.id.toString().includes(searchCritera.toLowerCase())
        || user.username.toLowerCase().includes(searchCritera.toLowerCase())
        || user.firstName.toLowerCase().includes(searchCritera.toLowerCase())
        || user.lastName.toLowerCase().includes(searchCritera.toLowerCase())
        || (user.email != null &&
            user.phoneNumber.toLowerCase().includes(searchCritera.toLowerCase()))
        ) {
          selectedUsers.push(user);
        }
    }
    return selectedUsers;
  }
}
