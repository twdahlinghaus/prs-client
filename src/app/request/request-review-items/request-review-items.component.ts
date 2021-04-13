import { Component, OnInit } from '@angular/core';
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
    
  constructor(
    private rqstsvc: RequestService,
    private systsvc: SystemService,
    private rqstlnssvc: RequestlinesService
  ) { }

  ngOnInit(): void {
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
    // this.rqstlnssvc.getlinesforrequest(+id).subscribe(
    //   res => {
    //     console.log("Request Line:", res);
    //     this.requestlines = res;
    //   }
    // );
  }

}
