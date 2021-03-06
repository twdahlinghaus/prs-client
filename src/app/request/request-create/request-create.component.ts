import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  user: User = new User();

  constructor(
    private rqstsvc: RequestService,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
  ) { }

  save(): void {
    console.log("B4 Change", this.request);
    // this.request.user = this.user;
    this.rqstsvc.create(this.request).subscribe(
      res => {
        console.log("Save success!");
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }  

  ngOnInit(): void {
    this.request.user=this.syssvc.loggedInUser;
    
  }

}
