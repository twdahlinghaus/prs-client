import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = null;

  constructor(
    private prdctsvc: ProductService,
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
  }

}
