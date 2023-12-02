import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Promotion } from '../../model/promotion.model';
import { PromoitonService } from 'src/app/services/promotion/promoiton.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],

})
export class PromotionsComponent {

  title = ' title promotion';
  ListPromotions: Array<Promotion> = [];
  page:number = 0;
  size:number = 0;
  totalPages : number = 0;


  constructor(private promotionService : PromoitonService , private route: ActivatedRoute){
  }


  ngOnInit(): void {
    //get query params else set default value
  this.route.queryParams.subscribe(params => {
    this.page = params['page'] || 1;
    this.size = params['size'] || 6;
    this.promotionService.getByPage(this.page,this.size).subscribe({
      next: data => {
        this.ListPromotions = data.content as Promotion[];
        this.totalPages = data.totalPages;
      },
      error: error => {
        console.error('There was an error!', error);
        console.log(error.error.message);
        error.error.message;
      }

    })

  });

  }



  findProductById(id:number) {

  }

  update(id:number) {

  }
  delete(item:any) {
    console.log(item);
  }
  edit(_t40: any) {
    throw new Error('Method not implemented.');
  }




}
