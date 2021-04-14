import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from "./requestlines.class";

@Injectable({
  providedIn: 'root'
})
export class RequestlinesService {

  baseurl: string = "http://localhost:8080/api/line-items/"

  constructor(
    private http:HttpClient
  ) { }

  
  get(id:number): Observable<Requestline> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Requestline>;
  }
  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseurl}`, requestline) as Observable<Requestline>;
  }
  change(requestline: Requestline): Observable<Requestline> {
    return this.http.put(`${this.baseurl}`, requestline) as Observable<Requestline>;
  }
  remove(requestline: Requestline): Observable<Requestline> {
    return this.http.delete(`${this.baseurl}${requestline.id}`) as Observable<Requestline>;
  }
  getlinesforrequest(id:number): Observable<Requestline[]> {
    return this.http.get(`${this.baseurl}lines-for-pr/${id}`) as Observable<Requestline[]>;
  }
}
