import { Component } from '@angular/core';
import { PromotionsService } from 'src/app/services/admin-general/promotions.service';
import { OnInit } from '@angular/core';
import { PromotionStatistique } from 'src/app/model/PromotionStatistique.model';
import { PromotionStatistiques } from 'src/app/model/PromotionStatistiques.model';

@Component({
  selector: 'app-admin-general-dashboard',
  templateUrl: './admin-general-dashboard.component.html',
  styleUrls: ['./admin-general-dashboard.component.css']
})
export class AdminGeneralDashboardComponent implements OnInit {

  public promotionsStatistiques!: Array<PromotionStatistiques> ;
  private errorMessage = '';



  constructor(
    private promotionService: PromotionsService
  ) { }


  ngOnInit(): void {
    this.promotionService.getStatisticsPromotionsAuNiveauDuRoyaume().subscribe({
      next: data=>{
        this.promotionsStatistiques = data;
      },
      error: err=>{
        console.log(err);
        this.errorMessage = err.error.message;

      }
    })

  }





}
