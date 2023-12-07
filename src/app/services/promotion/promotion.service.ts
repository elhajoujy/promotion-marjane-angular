import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from 'src/app/model/promotion.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
    // TODO: change endpoint of json server api to spring boot api 
  url:string  = "http://localhost:8080/promoitons"
  constructor(private http: HttpClient) { }

  public savePromotion(promotion: Promotion): Observable<Promotion>{
      // TODO: change endpoint of json server api to spring boot api 
    return this.http.post<Promotion>(`${environment.backendHost}/promoitons`, promotion);
  }
  getByPage(page:number, size:number):Observable<any> {
      // TODO: change endpoint of json server api to spring boot api 
    return this.http.get<any>(environment.backendHost + "/promoitons" + "?page=" + page + "&size=" + size);
  }
  getPromotions(){
      // TODO: change endpoint of json server api to spring boot api 
    return this.http.get<any>(environment.backendHost + "/promoitons");
  }
  deletePromotion(promotion: Promotion){
      // TODO: change endpoint of json server api to spring boot api 
    return this.http.delete<any>(environment.backendHost + `/promoitons/${promotion.id}`);
  }


}
