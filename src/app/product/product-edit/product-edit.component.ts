import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = null;
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
        console.log("Edit success!");
        this.router.navigateByUrl("products/list");
      },
      err => {
        console.error(err);
      }
    )
  }

  comptFn(a: Vendor, b: Vendor): boolean {
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


    let id = this.route.snapshot.params.id;
    this.prdctsvc.get(+id).subscribe(
      res => {
        console.log("Product:", res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );
  }
}
