import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request [] = [];
  searchCriteria: string = "";

  constructor(
    private rqstsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.rqstsvc.list().subscribe(
      res => {
        console.log("Requests", res)
        this.requests = res as Request[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
