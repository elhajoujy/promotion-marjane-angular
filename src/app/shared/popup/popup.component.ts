import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Promotion } from 'src/app/model/promotion.model';
import { PromotionService } from 'src/app/services/promotion/promotion.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
  @Output() closePopup = new EventEmitter<void>();

  public promotionForm! : FormGroup;


  constructor(private fb: FormBuilder, private promotionService: PromotionService, private router: Router){
    
  }
  
  close(){
    this.closePopup.emit();
  }
  ngOnInit(){
    this.promotionForm = this.fb.group({
      createdAt: this.fb.control('',[Validators.required]),
      updatedAt: this.fb.control('',[Validators.required]),
      description: this.fb.control('', [Validators.required]),
      status: this.fb.control('',[Validators.required]),
      precentage: this.fb.control(0,[Validators.required]),
      dateDebut : this.fb.control('',[Validators.required]),
      dateFin: this.fb.control('',[Validators.required]),
      category: this.fb.control('',[Validators.required])
    })
  }
  savePromotion(){
    let promotion: Promotion = this.promotionForm.value;
    this.promotionService.savePromotion(promotion).subscribe({
      next: data =>{
        alert(JSON.stringify(data));
        //this.router.navigate(["/admin/dashboard"]);
        //this.location.reload();
        location.reload();
      },
      error: err => {
        console.log(err);
        
      }
    })
  }
}
