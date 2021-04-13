import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestlines.class';
import { RequestlinesService } from '../requestlines.service'


@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['./requestlines-edit.component.css']
})
export class RequestlinesEditComponent implements OnInit {
  requestline: Requestline = null;
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
        console.log("Edit success!");
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
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
