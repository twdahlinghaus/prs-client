import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = new Product();

  constructor(

    private prdctsvc: ProductService,
    private router: Router
  ) { }

  save(): void {
    console.log("B4 Change", this.product);
    this.prdctsvc.change(this.product).subscribe(
      res => {
        console.log("Edit success!");
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {

    // let id = this.router.snapshot.params.id;

    // comptFn(a: Vendor, b:Vendor): boolean {
    //   return a && b a.id === b.id;
    // }
    }

}
