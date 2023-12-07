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
  // TODO: change endpoint of json server api to spring boot api 
  url:string  = "http://localhost:8080/promoitons"
  isPopupVisible = false;
  isPopupUpdateVisibile = false;
  Promotions: Array<any> = [];

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
  openPopupUpdate(){
    this.isPopupUpdateVisibile = true;
  }
  closePopupUpdate(){
    this.isPopupUpdateVisibile = false;
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

  this.promotionService.getPromotions().subscribe({
    next: data => {
      this.Promotions =data
    },
    error: err => {
      console.log(err);
      
    }
  });

  }


  handleDelete(promotion: Promotion){
    if(confirm("etes vous sure?"))
    this.promotionService.deletePromotion(promotion).subscribe({
      next: value => {
        //this.getProducts();
        this.Promotions.filter(p => p.id != promotion.id);
        location.reload();
      }
    })
  }


  savePromotion(){
    let promotion: Promotion = this.promotionForm.value;
    this.promotionService.savePromotion(promotion).subscribe({
      next: data =>{
        alert(JSON.stringify(data));
      },
      error: err => {
        console.log(err);
      }
    })
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

  // openPopup(){
  //   this.modalService.open('myModal');
  // }





}
