import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ProduitComponent } from './produit/produit.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionNewComponent } from './promotion-new/promotion-new.component';


@NgModule({
  declarations: [
    AppComponent,
    PromotionComponent,
    ProduitComponent,
    PromotionsComponent,
    PromotionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
