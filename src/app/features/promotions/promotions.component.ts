import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Promotion } from '../../model/promotion.model';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],

})
export class PromotionsComponent {
  url:string  = "http://localhost:8080/api/v1/promotions"
  title = ' title promotion';
  constructor(private http: HttpClient  ){
  }
  ngOnInit(): void {
    this.http.get<Array<Promotion>>(this.url).subscribe({
      next: data => {
        this.promotions = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }

    })

  }

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


  promotions:Array<Promotion> = [];

}
