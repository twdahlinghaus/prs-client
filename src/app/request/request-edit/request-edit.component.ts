import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = null;

  constructor(
    private rqstsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    save(): void {
      console.log("B4 Change", this.request);
      this.rqstsvc.change(this.request).subscribe(
        res => {
          console.log("Edit success!");
          this.router.navigateByUrl("/requests/list");
        },
        err => {
          console.error(err);
        }
      );
    }
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.rqstsvc.get(+id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }

    );
  }

}
