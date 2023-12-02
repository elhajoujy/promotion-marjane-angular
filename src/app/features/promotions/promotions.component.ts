import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Promotion } from '../../model/promotion.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromotionService } from 'src/app/services/promotion/promotion.service';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],

})
export class PromotionsComponent {
  url:string  = "http://localhost:8089/api/v1/promotions"
  title = ' title promotion';
  isPopupVisible = false;

  public promotionForm! : FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private promotionService: PromotionService ){
  }

  openPopup(){
    this.isPopupVisible = true;
  }
  closePopup(){
    this.isPopupVisible = false;
  }


  ngOnInit(): void {
    this.http.get<Array<Promotion>>(this.url).subscribe({
      next: data => {
        this.promotions = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

    // this.promotionForm = this.fb.group({
    //   description: this.fb.control('', [Validators.required]),
    //   status: this.fb.control('',[Validators.required]),
    //   precentage: this.fb.control(0,[Validators.required]),
    //   dateDebut : this.fb.control('',[Validators.required]),
    //   dateFin: this.fb.control('',[Validators.required])
    // })

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
    this.http.get<any>(this.url + "/" + id ).subscribe({
      next: data => {
        this.promotions = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }

    })
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



  promotions:Array<Promotion> = [];

}
