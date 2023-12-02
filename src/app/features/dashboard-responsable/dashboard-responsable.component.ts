import { Component, OnInit } from '@angular/core';
import { ResponsablePromotionRequest } from 'src/app/model/ResponsablePromotionRequest.model';
import { ResponsableUser } from 'src/app/model/ResponsableUser.model';
import { StatusPromotion } from 'src/app/model/StatusPromotion.model';
import { Promotion } from 'src/app/model/promotion.model';
import { AuthentificationService } from 'src/app/services/authService';
import { ResponsableService } from 'src/app/services/responsable/responsable.service';

@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrls: ['./dashboard-responsable.component.css']
})
export class DashboardResponsableComponent implements OnInit  {

  responsableServiceAuth : AuthentificationService;
  responsableService :ResponsableService;
  responsablePromotionRequest! :ResponsablePromotionRequest ;

  ListPromotions: Array<Promotion> = [];
  error:string = "";


  constructor(responsableServiceAuth : AuthentificationService, responsableService :ResponsableService) {
    this.responsableServiceAuth = responsableServiceAuth;
    this.responsableService = responsableService;

   }
   ngOnInit(): void {
    console.log('ngOnInit');
    if(this.responsableServiceAuth.isLogged()){
      this.getAllPromotions();

    }


  }
  getAllPromotions() {
    this.responsableService.getAllPromotions().subscribe({
      next: data => {
        console.log(data);
        this.ListPromotions = data;
      },
      error: error => {
        console.error('There was an error!', error);
        console.log(error.error.message);
        error.error.message;
        this.error = error.error.message;

      }

    })
  }
  updatePromotionStatus(promotionId: number, status: StatusPromotion) {


    this.responsablePromotionRequest = {
      //todo: get the responsable id from the auth service (responsableId)
      responsableId: 1,
      promotionList: [
        {
          //todo: get the promotion id from the html (promotionId)
          id: 1,
          status: status,
        }

      ]
    }
    console.log(this.responsablePromotionRequest);
    this.responsableService.approuverOuRefuserPromotion(this.responsablePromotionRequest).subscribe({
      next: data => {
        console.log(data);
        this.getAllPromotions();
      },
      error: error => {
        console.error('There was an error!', error);
        this.error = error.error.message;

      }

    })

  }

  acceptPromotion(promotionId: number ) {

    this.updatePromotionStatus(promotionId, StatusPromotion.ACCPETER);
  }

  refusePromotion(promotionId: number) {
    this.updatePromotionStatus(promotionId, StatusPromotion.REFUSER);
  }









}


