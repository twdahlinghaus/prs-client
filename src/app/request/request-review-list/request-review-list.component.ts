import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request [] = [];
  searchCriteria: string = "";

  constructor(
    private rqstsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.rqstsvc.list().subscribe(
      res => {
        console.log("Request", res)
        this.requests = res as Request [];
      },
      err => {
        console.error(err);
      }
    );
  }

}
