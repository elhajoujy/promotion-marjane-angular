import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from './model/Promotion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  url:string  = "http://localhost:8080/api/v1/promotions"
  title = ' title promotion';
  constructor(private http: HttpClient  ){

  }
  ngOnInit(): void {
    this.http.get<Array<Promotion>>(this.url).subscribe({
      next: data => {
        console.log(data);
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

  Actions: Array<any> =[
    {name: 'Home', link: '/home'},
    {name: 'About', link: '/about'},
    {name: 'Contact', link: '/contact'},
  ]
}
