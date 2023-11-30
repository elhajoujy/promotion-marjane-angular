import { Injectable , Inject, OnInit } from '@angular/core';
import { AuthentificationService } from '../authService';
import { IUser } from '../../model/user.model';
import { Promotion } from 'src/app/model/promotion.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, catchError } from 'rxjs';
import { Token } from '@angular/compiler';
import { ResponsablePromotionRequest } from 'src/app/model/ResponsablePromotionRequest.model';
import { ResponsablePromotionDto } from 'src/app/model/ResponsablePromotionDto.model';

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
    const url = "http://localhost:8080/api/v1/responsables-rayon/promotions";
    return this.http.get<Array<Promotion>>(url, {
      headers:{
        "Authorization": `Bearer ${this.authService.getToken()}`
      }
    });

  }

  //approuverOuRefuserPromotion(promotionId:number,action:string)

  approuverOuRefuserPromotion(promotionInformation:ResponsablePromotionRequest):Observable<any>{
    const url = "http://localhost:8080/api/v1/responsables-promotion";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };

    return this.http.post<any>(url,promotionInformation).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      }
    ));

  }


}
