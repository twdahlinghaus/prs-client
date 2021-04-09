import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = new Vendor();
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private vndrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  edit(): void {
    this.router.navigateByUrl(`/vendors/edit/${this.vendor.id}`);
  }

  delete(): void {
    this.vndrsvc.remove(this.vendor).subscribe(
      res => {
        console.log("Delete successful!");
      this.router.navigateByUrl("/vendors/list");
    },
    err => {
      console.error(err);
    }
    )
  }

  ngOnInit(): void {
    let vendor = this.route.snapshot.params.id;
    this.vndrsvc.get(+vendor).subscribe(
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
