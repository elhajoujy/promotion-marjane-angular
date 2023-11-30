import { Injectable , Inject, OnInit } from '@angular/core';
import { AuthentificationService } from '../authService';
import { IUser } from '../../model/user.model';
import { Promotion } from 'src/app/model/promotion.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { ResponsablePromotionRequest } from 'src/app/model/ResponsablePromotionRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService  implements OnInit  {

  ListPromotion: Array<Promotion>= [];
  token:string = "";
  constructor(
    @Inject(AuthentificationService) private authService:AuthentificationService,
    private http: HttpClient
    ) { }


  ngOnInit(): void {
    this.authService.isLogged();
  }

  addPromotion(promotion:Promotion){
    this.ListPromotion.push(promotion);
  }

  getAllPromotions() : Observable<Array<Promotion>>
  {
    var url = "http://localhost:8080/api/v1/responsables-rayon/promotions";
    return this.http.get<Array<Promotion>>(url, {
      headers:{
        "Authorization": `Bearer ${this.authService.getToken()}`
      }
    });

  }

  approuverOuRefuserPromotion(promotionInformation:ResponsablePromotionRequest):boolean{
    return true;
  }

}
