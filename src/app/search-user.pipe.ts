import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user.class';
import { Vendor } from './vendor/vendor.class';

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
            user.email.toLowerCase().includes(searchCritera.toLowerCase()))
        
        || (user.phoneNumber != null &&
            user.phoneNumber.toLowerCase().includes(searchCritera.toLowerCase()))
        ) {
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  }
}

// export class SearchUserPipe implements PipeTransform {
//   transforms(vendors: Vendor[], searchCritera: string): Vendor[] {
//     let selectedVendors: Vendor[] = [];
//     if(searchCritera.length == 0) {
//       return vendors;
//     }
//     for(let vendor of vendors) {
//       if(
//         vendor.id.toString().includes(searchCritera.toLowerCase())
//         || vendor.code.toLowerCase().includes(searchCritera.toLowerCase())
//         || vendor.address.toLowerCase().includes(searchCritera.toLowerCase())
//         || vendor.city.toLowerCase().includes(searchCritera.toLowerCase())
//         || vendor.state.toLowerCase().includes(searchCritera.toLowerCase())
//         || vendor.zip.toLowerCase().includes(searchCritera.toLowerCase())

//         || (vendor.email != null &&
//             vendor.email.toLowerCase().includes(searchCritera.toLowerCase()))
        
//         || (vendor.phoneNumber != null &&
//             vendor.phoneNumber.toLowerCase().includes(searchCritera.toLowerCase()))
//         ) {
//         selectedVendors.push(vendor);
//       }
//     }
//     return selectedVendors;
//   }
// }
