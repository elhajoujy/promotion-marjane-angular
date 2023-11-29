import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionsComponent } from './features/promotions/promotions.component';
import { HeroComponent } from './shared/hero/hero.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    PromotionsComponent,
    HeroComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
