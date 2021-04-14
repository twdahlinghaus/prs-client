import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  

  baseurl: string = "http://localhost:8080/api/requests/";

  constructor(
    private http:HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  get(id:number): Observable<Request> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Request>;
  }
  getreviews(id:number): Observable<Request[]> {
    return this.http.get(`${this.baseurl}list-review/${id}`) as Observable<Request[]>;
  }
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  change(request: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}`, request) as Observable<Request>;
  }
  remove(request: Request): Observable<Request> {
    return this.http.delete(`${this.baseurl}${request.id}`) as Observable<Request>;
  }
  approve(request: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/approve`, Request) as Observable<Request>;
  }
  reject(request: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/reject`, Request) as Observable<Request>;
  }
  review(request: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/submit-review`, Request) as Observable<Request>;
  }
}
