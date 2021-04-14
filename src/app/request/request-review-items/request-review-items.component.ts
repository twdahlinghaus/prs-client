import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from 'src/app/requestlines/requestlines.class';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-items',
  templateUrl: './request-review-items.component.html',
  styleUrls: ['./request-review-items.component.css']
})
export class RequestReviewItemsComponent implements OnInit {
    requests: Request [] = [];
    requestlines: Requestline [] = [];
    searchCriteria: string = "";
    request: Request = null;
    requestline: Requestline = null;
    showReject: boolean;
    
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rqstsvc: RequestService,
    private systsvc: SystemService,
    private rqstlnssvc: RequestlinesService
  ) { }

    approve():  void {
      this.rqstsvc.approve(this.request).subscribe(
        res => {
          this.router.navigateByUrl("/requests/list");
        },
        err => {
          console.error(err);
        }
      );
    }

    verify(): void {
      this.showReject=false;
      this.rqstsvc.reject(this.request).subscribe(
        res => {
          this.router.navigateByUrl("/requests/list");
        },
        err => {
          console.error(err);
        }
      );
    }
    reject(): void {
      this.showReject = !this.showReject;
    }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;

    this.rqstsvc.get(+id).subscribe(
      res => {
        console.log("Current request:", res);
        this.request = res;
      }
    )
    
    console.log(this.systsvc.loggedInUser);
    this.rqstsvc.getreviews(this.systsvc.loggedInUser.id).subscribe(
      res => {
        console.log("Request", res)
        this.requests = res as Request [];
      },
      err => {
        console.error(err);
      }
    );
    this.rqstlnssvc.getlinesforrequest(+id).subscribe(
      res => {
        console.log("Request Line:", res);
        this.requestlines = res;
      }
    );
  }

}
