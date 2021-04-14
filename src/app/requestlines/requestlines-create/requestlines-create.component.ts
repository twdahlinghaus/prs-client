import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestlines.class';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-requestlines-create',
  templateUrl: './requestlines-create.component.html',
  styleUrls: ['./requestlines-create.component.css']
})
export class RequestlinesCreateComponent implements OnInit {
  requestline: Requestline = new Requestline();
  products: Product [] = [];
  requests: Request [] = [];
  request: Request= new Request;

  constructor(
    private rqstlnssvc: RequestlinesService,
    private prdctsvc: ProductService,
    private rqstsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  save(): void {
    console.log("B4 Change", this.requestline);
    this.rqstlnssvc.create(this.requestline).subscribe(
      res => {
        console.log("Create success!");
        this.router.navigateByUrl(`/requests/request-lines/${this.requestline.request.id}`);
      }
    )

  }

  comptFn(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

  ngOnInit(): void {
    this.requestline.request=this.request
    this.prdctsvc.list().subscribe(
      res => {
        console.log (res);
        this.products = res as Product[];
      },
      err => {
        console.error(err);
      }
    );
  // this.rqstsvc.list().subscribe(
  //   res => {
  //     console.log (res);
  //     this.requests = res as Request[];
  //   },
  //   err => {
  //     console.error(err);
  //   }
  // );

        let id = this.route.snapshot.params.id;
    this.rqstsvc.get(+id).subscribe(
      res => {
        console.log("Request:", res);
        this.requestline.request = res;
      },
      err => {
        console.error(err);
      }
    );
  
    

  }
  

}
