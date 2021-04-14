import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Requestline } from 'src/app/requestlines/requestlines.class';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  requestlines: Requestline [] = [];
  searchCriteria: string = "";
  request: Request = null;
  requestline: Requestline = null;


  constructor(
    private rqstsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private rqstlnssvc: RequestlinesService
  ) { }

  review(): void {
    this.rqstsvc.review(this.request).subscribe(
      res => {
        console.log("Review success!");
      },
      err => {
        console.error(err);
      }
    )
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.rqstsvc.get(+id).subscribe(
      res => {
        console.log("Request Line:", res);
        this.request = res as Request;
      },
      err => {
        console.error(err);
      }
    );
    this.rqstlnssvc.getlinesforrequest(+id).subscribe(
      res => {
        console.log("Request Lines:", res);
        this.requestlines = res;
      }
    );
  }
}
