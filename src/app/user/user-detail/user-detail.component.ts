import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  id: number = 0;
  
  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    // this.usrsvc.get(+this.id).subscribe(
    //   res => {
    //     console.log("User:", res);
    //     this.user = res;
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // );
  }

}
