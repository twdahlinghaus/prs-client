import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user.class';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string = "http://localhost:8080/api/vendors/";
  

  constructor(
    private http:HttpClient
  ) { }
    
  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }
  change(vendor: Vendor): Observable<Vendor> {
    return this.http.put(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }
  remove(vendor: Vendor): Observable<Vendor> {
    return this.http.delete(`${this.baseurl}${vendor.id}`) as Observable<Vendor>;
  }
}