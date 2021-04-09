import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestlines.class';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';

@Component({
  selector: 'app-requestlines-create',
  templateUrl: './requestlines-create.component.html',
  styleUrls: ['./requestlines-create.component.css']
})
export class RequestlinesCreateComponent implements OnInit {
  requestline: Requestline = new Requestline();

  constructor(
    private rqstlnssvc: RequestlinesService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  save(): void {
    console.log("B4 Change", this.requestline);
    this.rqstlnssvc.change(this.requestline).subscribe(
      res => {
        console.log("Create success!");
        this.router.navigateByUrl("/request/list");
      }
    )

  }

  ngOnInit(): void {
  }

}
