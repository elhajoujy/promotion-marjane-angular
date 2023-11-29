import { Component, OnInit } from '@angular/core';
import { ResponsableUser } from 'src/app/model/ResponsableUser.model';
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

  ListPromotions: Array<Promotion> = [];
  error:string = "";


  constructor(responsableServiceAuth : AuthentificationService, responsableService :ResponsableService) {
    this.responsableServiceAuth = responsableServiceAuth;
    this.responsableService = responsableService;

   }
   ngOnInit(): void {
    console.log('ngOnInit');
    if(this.responsableServiceAuth.isLogged()){
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


  }
  acceptPromotion(promotionId: number) {
    // Call your API or service to update the promotion status to "ACCEPTER"
    // You may need to handle success and error cases accordingly
  }

  refusePromotion(promotionId: number) {
    // Call your API or service to update the promotion status to "REFUSER"
    // You may need to handle success and error cases accordingly
  }









}


