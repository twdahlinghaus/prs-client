import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product: Product = new Product();
  vendor: Vendor = new Vendor();
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private prdctsvc: ProductService,
    private vndrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }
  
  edit(): void {
    this.router.navigateByUrl(`/products/edit/${this.product.id}`);
  }

  delete(): void {
    this.prdctsvc.remove(this.product).subscribe(
      res => {
        console.log("Delete success!");
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
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

    let vendor = this.route.snapshot.params.id;
    this.vndrsvc.get(+id).subscribe(
      res => {
        console.log("Vendor:", res);
      this.vendor = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
