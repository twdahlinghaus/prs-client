import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

    request: Request = new Request();
    id: number = 0;
    showVerify: boolean = false;

  constructor(
    private rqstsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  edit(): void {
    this.router.navigateByUrl(`/requests/edit/${this.request.id}`);
  }

  delete(): void {
    this.rqstsvc.remove(this.request).subscribe(
      res => {
        console.log("Delete success!");
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
        console.log("request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
