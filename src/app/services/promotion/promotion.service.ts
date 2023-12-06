import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from 'src/app/model/promotion.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  url:string  = "http://localhost:8080/promoitons"
  constructor(private http: HttpClient) { }

  public savePromotion(promotion: Promotion): Observable<Promotion>{
    return this.http.post<Promotion>(`${environment.backendHost}/promoitons`, promotion);
  }
  getByPage(page:number, size:number):Observable<any> {
    return this.http.get<any>(environment.backendHost + "/promoitons" + "?page=" + page + "&size=" + size);
  }
  getPromotions(){
    return this.http.get<any>(environment.backendHost + "/promoitons");
  }
  deletePromotion(promotion: Promotion){
    return this.http.delete<any>(environment.backendHost + `/promoitons/${promotion.id}`);
  }


}
