import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Promotion } from '../../model/promotion.model';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromotionService } from 'src/app/services/promotion/promotion.service';


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

  url:string  = "http://localhost:8089/api/v1/promotions"
  isPopupVisible = false;

  public promotionForm! : FormGroup;

  constructor(private http: HttpClient,
    private route : ActivatedRoute,
    private fb: FormBuilder, private promotionService: PromotionService ){
  }

  openPopup(){
    this.isPopupVisible = true;
  }
  closePopup(){
    this.isPopupVisible = false;
  }


  ngOnInit(): void {
    //get query params else set default value
  this.route.queryParams.subscribe(params => {
    this.page = params['page'] || 0;
    this.size = params['size'] || 5;
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
    });

    // this.promotionForm = this.fb.group({
    //   description: this.fb.control('', [Validators.required]),
    //   status: this.fb.control('',[Validators.required]),
    //   precentage: this.fb.control(0,[Validators.required]),
    //   dateDebut : this.fb.control('',[Validators.required]),
    //   dateFin: this.fb.control('',[Validators.required])
    // })

  });

  }


  // savePromotion(){
  //   let promotion: Promotion = this.promotionForm.value;
  //   this.promotionService.savePromotion(promotion).subscribe({
  //     next: data =>{
  //       alert(JSON.stringify(data));
  //     },
  //     error: err => {
  //       console.log(err);

  //     }
  //   })
  // }

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

  // openPopup(){
  //   this.modalService.open('myModal');
  // }





}
