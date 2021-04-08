import { Injectable } from '@angular/core';
import { User } from './user/user.class';
import { Vendor } from './vendor/vendor.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null;

  constructor() { }

  chkLogin(): void {
    if(this.loggedInUser == null) {
      // this.router.navigateByURL(`/login`);
      console.warn("Check for login disabled!");
    }
  }
}
