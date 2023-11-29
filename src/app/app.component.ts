import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promotion } from './model/promotion.model';
import { HeroComponent } from './shared/hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private http: HttpClient) {


   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Actions: Array<any> =[
    {name: 'Home', link: '/home'},
    {name: 'About', link: '/about'},
    {name: 'Contact', link: '/contact'},
  ]
}
