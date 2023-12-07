import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PromotionStatistiques } from 'src/app/model/PromotionStatistiques.model';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  private backendHost:string = environment.backendHost;
  private Authorization:string = "barer genertedtokeeenakdjhakjha8y843278sljkcdhjks";
  constructor(
    private http: HttpClient
  ) { }

  getStatisticsPromotionsAuNiveauDuRoyaume():Observable<Array<PromotionStatistiques>>{
    return this.http.get<Array<PromotionStatistiques>>(`${this.backendHost}/api/v1/statistics/promotions/royaume`,{
      headers: {
        Authorization: this.Authorization
      }
    });
  }
}

