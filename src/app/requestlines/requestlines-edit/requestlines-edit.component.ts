import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Requestline } from '../requestlines.class';
import { RequestlinesService } from '../requestlines.service'


@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['./requestlines-edit.component.css']
})
export class RequestlinesEditComponent implements OnInit {
  requestline: Requestline = null;

  constructor(
    private rqstlnssvc: RequestlinesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("B4 Change", this.requestline);
    this.rqstlnssvc.change(this.requestline).subscribe(
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
    this.rqstlnssvc.get(+id).subscribe(
      res => {
        console.log("Requestline:", res);
        this.requestline = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
