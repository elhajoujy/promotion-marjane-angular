import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoitonService {
  url:string  = "http://localhost:8080/api/v1/promotions"

  constructor( private http:HttpClient) { }

  getByPage(page:number, size:number):Observable<any> {
    return this.http.get<any>(this.url + "?page=" + page + "&size=" + size);
  }

}
