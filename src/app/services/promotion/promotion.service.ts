import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from 'src/app/model/promotion.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  url:string  = "http://localhost:8080/api/v1/promotions"
  constructor(private http: HttpClient) { }

  public savePromotion(promotion: Promotion): Observable<Promotion>{
    return this.http.post<Promotion>(`${environment.backendHost}/api/v1/admin_centres/promotions`, promotion);
  }
  getByPage(page:number, size:number):Observable<any> {
    return this.http.get<any>(environment.backendHost + "/api/v1/promotions" + "?page=" + page + "&size=" + size);
  }


}
