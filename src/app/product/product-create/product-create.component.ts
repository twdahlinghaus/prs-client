import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(

    private prdctsvc: ProductService,
    private vndrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("B4 Change", this.product);
    this.prdctsvc.change(this.product).subscribe(
      res => {
        console.log("Save success!");
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }
    comptFn(a: Vendor, b:Vendor): boolean {
      return a && b && a.id === b.id;
  }

  ngOnInit(): void {

    this.vndrsvc.list().subscribe(
      res => {
        console.log("Vendors:", res);
      this.vendors = res;
      },
      err => {
        console.error(err);
      }
    );
   }
}
