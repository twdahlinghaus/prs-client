import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestlines.class';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestlines-create',
  templateUrl: './requestlines-create.component.html',
  styleUrls: ['./requestlines-create.component.css']
})
export class RequestlinesCreateComponent implements OnInit {
  requestline: Requestline = new Requestline();
  products: Product [] = [];

  constructor(
    private rqstlnssvc: RequestlinesService,
    private prdctsvc: ProductService,
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

  comptFn(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

  ngOnInit(): void {
    this.prdctsvc.list().subscribe(
      res => {
        console.log (res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
